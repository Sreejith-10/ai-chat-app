"use client";

import {
	ChevronLeft,
	ChevronRight,
	Dot,
	Moon,
	Pencil,
	PersonStanding,
	Sun,
	X,
} from "lucide-react";
import {motion} from "framer-motion";
import {useTheme} from "next-themes";
import {useAppDispatch, useAppSelector} from "@/redux/redux.hooks";
import {setSideBar} from "@/redux/slices/windowSlice";

const SideBar = () => {
	const {theme, setTheme} = useTheme();
	const dispatch = useAppDispatch();
	const {showSideBar} = useAppSelector((state) => state.window);

	return (
		<>
			<motion.div
				variants={{
					from: {
						translateX: "var(--w)",
						zIndex: "var(--z,1)",
					},
					to: {
						translateX: "0%",
					},
				}}
				transition={{ease: "easeIn"}}
				initial={showSideBar ? "to" : "from"}
				animate={showSideBar ? "from" : "to"}
				className={`w-full h-full  flex [--w:-96%] md:[--w:-100%] sm:[--w:-100%]`}>
				<div
					className={`${
						showSideBar ? "w-[96%] md:w-[90%]" : "w-full"
					} h-full p-4 relative ${
						!showSideBar ? "bg-slate-200 dark:bg-slate-800" : "bg-transparent"
					}`}>
					<div
						className={`w-full h-12  flex items-center justify-between hover:bg-slate-400 rounded-md ease delay-300 duration-150 px-2 ${
							showSideBar && "opacity-0"
						}`}>
						<div className="flex gap-5">
							<Sun />
							<h1 className="font-bold dark:text-slate-100">New Chat</h1>
						</div>
						<Pencil />
					</div>
					<div className={`${showSideBar && "opacity-0"} mt-5`}>
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
					<div
						className={`w-full h-20 absolute bottom-0 left-0 flex items-center justify-center px-3 ${
							showSideBar && "opacity-0"
						}`}>
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
				<div
					className={`${
						!showSideBar ? "w-[10%] md:w-0" : "w-full"
					} h-full md:hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center`}>
					{showSideBar ? (
						<ChevronRight
							className="cursor-pointer"
							onClick={() => dispatch(setSideBar(false))}
						/>
					) : (
						<ChevronLeft
							className="cursor-pointer"
							onClick={() => dispatch(setSideBar(true))}
						/>
					)}
				</div>
				<div
					className={`w-[10%] sm:w-[20%] h-full hidden md:block bg-none dark:bg-transparent relative ${
						showSideBar && "opacity-0"
					}`}>
					<X
						size={35}
						className="absolute top-5 cursor-pointer"
						onClick={() => dispatch(setSideBar(true))}
					/>
				</div>
			</motion.div>
		</>
	);
};

export default SideBar;
