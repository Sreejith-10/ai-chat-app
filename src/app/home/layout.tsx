"use client";

import {useAppSelector} from "@/redux/redux.hooks";

const HomeLayout = ({
	section1,
	section2,
}: {
	section1: React.ReactNode;
	section2: React.ReactNode;
}) => {
	const {showSideBar} = useAppSelector((state) => state.window);

	return (
		<main className="w-full h-screen flex md:relative">
			<section
				className={`${
					!showSideBar ? "w-[20%] lg:w-[30%] md:w-1/2 sm:w-[70%]" : "w-[5%]"
				} md:absolute md:w-0 md:top-0 md:left-0 h-screen ${
					showSideBar ? "md:-z-50 " : "md:z-50"
				}`}>
				{section1}
			</section>
			<section
				className={`${
					!showSideBar ? "w-[80%] lg:w-[70%]" : "w-screen"
				} md:w-full h-screen`}>
				{section2}
			</section>
		</main>
	);
};

export default HomeLayout;
