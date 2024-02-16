"use client";

import {
	ChevronLeft,
	ChevronRight,
	Dot,
	Moon,
	Pencil,
	PersonStanding,
	Sun,
} from "lucide-react";
import {motion} from "framer-motion";
import {useTheme} from "next-themes";
import {SetState} from "@/lib/types";

const SideBar = () => {
	const {theme, setTheme} = useTheme();

	return (
		<motion.div
			variants={{
				from: {
					translateX: "-96%",
				},
				to: {
					translateX: "0%",
				},
			}}
			initial={showSideBar ? "to" : "from"}
			animate={showSideBar ? "from" : "to"}
			className="w-full h-full bg-slate-200 dark:bg-slate-800 flex">
			<div className="w-[96%] h-full p-4 relative">
				<div className="w-full h-12 flex items-center justify-between hover:bg-slate-400 rounded-md ease delay-300 duration-150 px-2">
					<div className="flex gap-5">
						<Sun />
						<h1 className="font-bold dark:text-slate-100">New Chat</h1>
					</div>
					<Pencil />
				</div>
				<div className="mt-5">
					<div className="w-full h-8 font-bold">Yestearday</div>
					<div className="w-full h-auto">
						<ul className="w-full flex items-start flex-col gap-2">
							<li className="w-full h-10 font-bold flex items-start flex-col justify-center pl-4 rounded-md hover:bg-slate-300">
								how to flex
							</li>
							<li className="w-full h-10 flex items-start flex-col justify-center pl-4 rounded-md hover:bg-slate-300">
								Diw yasjdajsk
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full h-20 absolute bottom-0 left-0 flex items-center justify-center px-3">
					<div className="w-full h-full flex items-center gap-10 hover:bg-slate-300 rounded-md ease-in-out delay-200 duration-200">
						<div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center">
							<PersonStanding size={40} />
						</div>
						<h1 className="font-bold">Autobot</h1>
					</div>
					<div className="pr-4 cursor-pointer">
						{theme === "light" ? (
							<Moon size={35} onClick={() => setTheme("dark")} />
						) : (
							<Sun size={35} onClick={() => setTheme("light")} />
						)}
					</div>
				</div>
			</div>
			<div className="w-[4%] h-full bg-white dark:bg-inherit flex items-center justify-center">
				{showSideBar ? (
					<ChevronRight
						className="cursor-pointer"
						onClick={() => setShowSideBar(false)}
					/>
				) : (
					<ChevronLeft
						className="cursor-pointer"
						onClick={() => setShowSideBar(true)}
					/>
				)}
			</div>
		</motion.div>
	);
};

export default SideBar;
