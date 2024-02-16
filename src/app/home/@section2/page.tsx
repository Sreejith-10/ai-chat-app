"use client";

import {Input} from "@/components/ui/input";
import Message from "@/components/ui/message";
import {useAppDispatch, useAppSelector} from "@/redux/redux.hooks";
import {setSideBar} from "@/redux/slices/windowSlice";
import {ArrowUp, Menu} from "lucide-react";
import React from "react";

type DatasType = {
	title: string;
	paragraph: string;
}[];

const MainSection = () => {
	const dispatch = useAppDispatch();
	const {showSideBar} = useAppSelector((state) => state.window);

	const datas: DatasType = [
		{
			title: "Help me study",
			paragraph: "vocabulary for a college enterance exam",
		},
		{
			title: "Compare business strategies",
			paragraph: "for transitionng from budget luxury",
		},
		{
			title: "Tell me about",
			paragraph: "about roman empire",
		},
		{
			title: "Is html a programing language",
			paragraph: "give a proper statement about this",
		},
	];

	return (
		<div className="w-full h-screen relative flex items-center flex-col">
			<div className="absolute left-5 top-5 hidden md:block">
				<Menu
					size={35}
					onClick={() => dispatch(setSideBar(false))}
					className="cursor-pointer"
				/>
			</div>
			<div className="absolute top-1/3 -translate-y-1/2 flex flex-col gap-16 md:px-20 sm:px-10">
				<Message name="You" />
				<Message name="Chat gpt" />
			</div>
			<div className="absolute w-1/2 lg:w-[60%] md:w-[80%] bottom-5 left-1/2 -translate-x-1/2">
				<div className="w-auto mb-4 flex flex-wrap gap-y-2 items-center justify-evenly">
					{datas.map((val, id) => (
						<div
							key={id}
							className="w-[49%] h-auto px-4 py-4 md:px-2 md:py-2 border border-slate-400 rounded-md">
							<h1 className="font-bold md:text-sm md:line-clamp-1 lg:line-clamp-1">
								{val.title}
							</h1>
							<p className="text-sm md:text-xs text-slate-800 dark:text-slate-400 lg:line-clamp-1 md:line-clamp-1">
								{val.paragraph}
							</p>
						</div>
					))}
				</div>
				<div className="relative lg:w-full">
					<Input className="w-full" />
					<div className="w-fit absolute top-2 right-4">
						<ArrowUp className="bg-slate-300 dark:bg-slate-500 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
