"use client";

import {Input} from "@/components/ui/input";
import NavBar from "@/components/ui/navbar";
import {ArrowUp} from "lucide-react";
import React, {useState} from "react";

const MainSection = () => {
	const [prompt, setPropmpt] = useState("");

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPropmpt(e.target.value);
	};

	const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") console.log("Enter");
	};

	return (
		<div className="w-full h-full p-5 flex flex-col items-center bg-slate-50 dark:bg-slate-950">
			<header className="w-full h-10 ">
				<NavBar />
			</header>
			<section className="w-1/2 h-full relative flex items-start mt-10">
				<div>
					<h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Hello, Maestro.
					</h1>
					<h4 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-600">
						How can i help you today?
					</h4>
				</div>
				<div className="w-full absolute bottom-0">
					<Input
						onchange={onChangeHandler}
						onkeydown={keyDownHandler}
						placeholder="Enter a prompt here"
					/>
					<ArrowUp className="absolute top-2 right-3 bg-slate-300 rounded-md" />
				</div>
			</section>
		</div>
	);
};

export default MainSection;
