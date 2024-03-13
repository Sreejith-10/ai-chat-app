"use client";

import {Input} from "@/components/ui/input";
import NavBar from "@/components/ui/navbar";
import axios from "axios";
import {ArrowUp, User} from "lucide-react";
import React, {useState} from "react";

const MainSection = () => {
	const [prompt, setPropmpt] = useState("");

	const [chats, setChats] = useState<{user: string; message: string}[]>([]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPropmpt(e.target.value);
	};

	const keyDownHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setChats((prev) => [...prev, {user: "You", message: prompt}]);
			const {data} = await axios.post(
				"http://localhost:5001/api/gemeni_chat",
				{body: prompt},
				{headers: {"Content-Type": "application/json"}}
			);
			setPropmpt("");
			console.log(data);
			if (data) {
				setChats((prev) => [...prev, {user: "Gemeni", message: data.message}]);
			}
		}
	};

	return (
		<div className="w-full h-full p-5 flex flex-col items-center bg-slate-50 dark:bg-slate-950">
			<header className="w-full h-10 ">
				<NavBar />
			</header>
			<section className="w-1/2 h-full relative flex items-start mt-10">
				<div className="w-full h-full overflow-y-scroll">
					{chats.length != 0 ? (
						<ul className="w-full space-y-5 mt-4">
							{chats?.map((item) => (
								<li key={item.user}>
									<div className="w-full h-auto flex flex-col gap-5">
										<span className="flex gap-5 items-center">
											{item.user === "Gemini" ? "d" : "l"}
											<p>{item.user}</p>
										</span>
										<span>
											{item.user === "Gemeni"
												? item.message
												: // <MarkdownRenderer markdown={item.message} />
												  item.message}
										</span>
									</div>
								</li>
							))}
						</ul>
					) : (
						<>
							<h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								Hello, Maestro.
							</h1>
							<h4 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-600">
								How can i help you today?
							</h4>
						</>
					)}
				</div>
				<div className="w-full absolute bottom-0">
					<Input
						onchange={onChangeHandler}
						onkeydown={keyDownHandler}
						value={prompt}
						placeholder="Enter a prompt here"
					/>
					<ArrowUp className="absolute top-2 right-3 bg-slate-300 rounded-md" />
				</div>
			</section>
		</div>
	);
};

export default MainSection;
