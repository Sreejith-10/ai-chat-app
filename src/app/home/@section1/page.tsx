"use client";

import {useAppDispatch, useAppSelector} from "@/redux/redux.hooks";
import {
	setNavIcons,
	setSideBar,
	setSideBarWidth,
} from "@/redux/slices/windowSlice";
import {Bot, ChevronLeft, ChevronRight, FilePenLineIcon, X} from "lucide-react";
import {useEffect, useRef} from "react";

const SideSection = () => {
	const ref = useRef<HTMLDivElement | null>(null!);
	const dispatch = useAppDispatch();
	const {showSideBar} = useAppSelector((state) => state.window);

	useEffect(() => {
		if (ref.current) {
			dispatch(setSideBarWidth(ref.current.offsetWidth));
		}
	}, [ref.current?.offsetWidth]);

	return (
		<div className="w-full h-full flex">
			<div className="w-[95%] h-full p-5 bg-slate-100 dark:bg-slate-900">
				<div className="w-full h-20 flex items-center justify-between px-3 rounded-md ease-in-out delay-200 duration-100">
					<span className=" flex items-center justify-start gap-5">
						<Bot size={30} />
						<h3 className="font-semibold text-lg">New chat</h3>
					</span>
					<FilePenLineIcon size={30} />
				</div>
				<div className="w-full h-auto px-3">
					<div className="w-full h-auto mt-3">
						<h3 className="font-semibold text-lg pb-2">Recent</h3>
						<ul className="w-full flex gap-3 flex-col">
							<li className="text-nowrap font-semibold text-base line-clamp-1 px-2 py-2 hover:bg-slate-300 dark:hover:bg-slate-600  rounded-md ease-in-out delay-200 duration-300">
								Gloabl warming
							</li>
							<li className="font-semibold text-base line-clamp-1 px-2 py-2 hover:bg-slate-300 rounded-md ease-in-out delay-200 duration-300">
								Tell me about yourslet
							</li>
							<li className="text-nowrap font-semibold text-base line-clamp-3 px-2 py-2 hover:bg-slate-300 rounded-md ease-in-out delay-200 duration-300 ">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Adipisci, quod?
							</li>
							<li className="text-nowrap font-semibold text-base line-clamp-6 px-2 py-2 hover:bg-slate-300 rounded-md ease-in-out delay-200 duration-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
								nam animi corrupti incidunt reprehenderit expedita laboriosam
								harum fugit quaerat maxime?
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full h-full hidden sm:block">
				<X
					className="mt-3 ml-3"
					size={30}
					onClick={() => dispatch(setNavIcons(false))}
				/>
			</div>
			<div
				ref={ref}
				className="w-[5%] h-full flex items-center justify-center sm:hidden">
				{showSideBar ? (
					<ChevronRight
						onClick={() => dispatch(setSideBar(false))}
						className="cursor-pointer"
					/>
				) : (
					<ChevronLeft
						onClick={() => dispatch(setSideBar(true))}
						className="cursor-pointer"
					/>
				)}
			</div>
		</div>
	);
};

export default SideSection;
