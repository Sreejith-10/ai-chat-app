"use client";

import {useAppSelector} from "@/redux/redux.hooks";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

const HomeLayout = ({
	section1,
	section2,
}: {
	section1: ReactNode;
	section2: ReactNode;
}) => {
	const parentRef = useRef<HTMLElement | null>(null);
	const {showSideBar, sideBarSlider, navIcons} = useAppSelector(
		(state) => state.window
	);
	const [parentWidth, setParentWidth] = useState<number>(0);

	useEffect(() => {
		if (parentRef.current) {
			setParentWidth(parentRef.current.offsetWidth);
		}
	}, [parentRef.current?.offsetWidth]);

	const marginL = parentWidth - sideBarSlider;

	return (
		<main className="w-screen h-screen flex sm:relative">
			<motion.section
				ref={parentRef}
				variants={{
					hide: {
						marginLeft: `-${marginL}px`,
					},
					show: {
						marginLeft: "0",
					},
				}}
				initial="show"
				animate={!showSideBar ? "show" : "hide"}
				className="w-[25%] h-full sm:hidden">
				{section1}
			</motion.section>
			<motion.section
				variants={{
					intital: {
						translateX: -1000,
						zIndex: -100,
					},
					animate: {
						translateX: 0,
						zIndex: 100,
					},
				}}
				initial="initial"
				animate={navIcons ? "animate" : "intital"}
				className="h-full w-[80%] hidden sm:block absolute top-0 left-0">
				{section1}
			</motion.section>
			<section
				className={`${
					showSideBar ? "w-screen" : "ml-0 w-[75%] h-full"
				} sm:w-screen sm:z-[1]`}>
				{section2}
			</section>
		</main>
	);
};

export default HomeLayout;
