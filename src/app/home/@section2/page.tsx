"use client";

import Chats from "@/components/chats";
import {Input} from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import NavBar from "@/components/ui/navbar";
import {pauseSpeach, textToSpeach} from "@/lib/texttospeach";
import axios from "axios";
import {ArrowUp, PauseCircle, Sparkle, Volume2} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";

const MainSection = () => {
	const [prompt, setPropmpt] = useState("");

	const [incoming, setIncoming] = useState("");

	const chatRef = useRef<HTMLUListElement>(null);

	const [chats, setChats] = useState<
		{id: number; user: string; message: string; replie: string}[]
	>([]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPropmpt(e.target.value);
	};

	useEffect(() => {
		const updateState = () => {
			const s = chats.map((item) => {
				if (item.replie === "") {
					return {...item, replie: incoming};
				} else {
					return item;
				}
			});
			setChats(s);
			setIncoming("");
		};

		updateState();
	}, [incoming]);

	useEffect(() => {
		chatRef.current?.scrollIntoView({behavior: "smooth"});
	}, [chats]);

	const keyDownHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		try {
			if (e.key === "Enter") {
				const id = chats.length + 1;
				const cmd = prompt;
				setPropmpt("");
				setChats((prev) => [
					...prev,
					{id: id, user: "You", message: prompt, replie: ""},
				]);
				const {data} = await axios.post(
					"http://localhost:5001/api/gemeni_chat",
					{body: cmd},
					{headers: {"Content-Type": "application/json"}}
				);
				setIncoming(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full h-full p-5 flex flex-col items-center bg-slate-50 dark:bg-slate-950">
			<nav className="w-full h-10 ">
				<NavBar />
			</nav>
			<section className="w-1/2 sm:w-full h-full relative flex items-start mt-10">
				<div className="w-full h-fit">
					{chats.length !== 0 ? (
						<ul
							ref={chatRef}
							className="w-full h-[700px] space-y-8 mt-4 overflow-scroll">
							{chats?.map((item) => (
								<Chats item={item} key={item.id} />
							))}
						</ul>
					) : (
						<>
							<h1 className="text-8xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								Hello, Maestro.
							</h1>
							<h4 className="text-6xl sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-600">
								How can i help you today?
							</h4>
						</>
					)}
				</div>
			</section>
			<div className="w-auto absolute bottom-2">
				<div className="w-[700px]">
					<Input
						onchange={onChangeHandler}
						onkeydown={keyDownHandler}
						placeholder="Enter a prompt here"
						value={prompt}
					/>
					<ArrowUp className="absolute top-2 right-3 bg-slate-300 rounded-md" />
				</div>
				<p className="text-[12px] py-2 text-center">
					This ai may display in accurate info,including about people , so
					double check its response
				</p>
			</div>
		</div>
	);
};

export default MainSection;
