"use client";

import {useAppSelector} from "@/redux/redux.hooks";
import Link from "next/link";
import {useState} from "react";
import TypeWriter from "typewriter-effect";

export default function Home() {
	const {isLogged} = useAppSelector((state) => state.auth);

	const lists = [
		"Write an essay about global warming",
		"Suggest an activity for tomorrow",
		"how to felx mussle",
	];

	return (
		<main className="w-screen h-screen flex flex-row items-center justify-center">
			<section className="w-1/2 h-full dark:bg-purple-800 md:hidden lg:hidden flex items-center justify-center flex-col gap-5">
				<h1 className="font-bold text-[2rem] dark:text-slate-100">
					Welcome to Ai world
				</h1>
				<h1 className="font-bold text-[2rem] text-purple-900 dark:text-slate-800 text-center">
					<TypeWriter
						options={{
							autoStart: true,
							loop: true,
							delay: 100,
							deleteSpeed: 100,
							strings: lists,
						}}
					/>
				</h1>
			</section>
			<section className="w-1/2 lg:w-full h-full flex items-center justify-center flex-col bg-slate-900">
				<div className="w-60 flex flex-col items-center justify-center gap-5">
					<h3 className="text-slate-100 text-lg">Get Started</h3>
					{isLogged ? (
						<Link
							href={"/home"}
							className="w-full text-center bg-purple-800 hover:bg-slate-800 ease-linear delay-200 text-slate-200 py-2 px-2 rounded-md">
							Home
						</Link>
					) : (
						<>
							<Link
								href={"/login"}
								className="w-full text-center bg-purple-800 hover:bg-slate-800 ease-linear delay-200 text-slate-200 py-2 px-2 rounded-md">
								Login
							</Link>
							<Link
								href={"/register"}
								className="w-full text-center bg-purple-800 hover:bg-slate-800 ease-linear delay-200 text-slate-200 py-2 px-2 rounded-md">
								Signup
							</Link>
						</>
					)}
				</div>
			</section>
		</main>
	);
}
