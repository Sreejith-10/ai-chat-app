import {useState} from "react";

const HomeLayout = ({
	section1,
	section2,
}: {
	section1: React.ReactNode;
	section2: React.ReactNode;
}) => {
	return (
		<main className="w-full h-screen flex">
			<section className="w-[20%] h-screen">{section1}</section>
			<section className="w-[80%] h-screen">{section2}</section>
		</main>
	);
};

export default HomeLayout;
