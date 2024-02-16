import {Input} from "@/components/ui/input";
import {ArrowUp} from "lucide-react";
import React from "react";

type DatasType = {
	title: string;
	paragraph: string;
}[];

const MainSection = () => {
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
			<div className="absolute top-1/3 -translate-y-1/2">
				How can i help you today ?
			</div>
			<div className="absolute w-1/2 bottom-5 right-0 -translate-x-1/2">
				<div className="w-auto mb-4 flex flex-wrap gap-1">
					{datas.map((val, id) => (
						<div
							key={id}
							className="w-[49%] h-auto px-2 py-4 border border-slate-400 rounded-md">
							<h1 className="font-bold">{val.title}</h1>
							<p className="text-sm text-slate-800 dark:text-slate-400">
								{val.paragraph}
							</p>
						</div>
					))}
				</div>
				<div className="relative">
					<Input />
					<div className="w-fit absolute top-2 right-4">
						<ArrowUp className="bg-slate-300 dark:bg-slate-500 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
