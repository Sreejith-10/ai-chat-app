"use client";

import {Input} from "@/components/ui/input";
import {Label} from "@radix-ui/react-label";
import Image from "next/image";
import "../auth.css";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
	return (
		<section className="w-[900px] h-[500px] sm:w-[350px] md:w-[500px] flex bg-slate-100 dark:bg-slate-900 rounded-md shadow-xl animate-fade-op">
			<div className="w-1/2 h-full sm:hidden md:hidden bg-purple-700 text-slate-100 rounded-tl-md rounded-bl-md clip flex items-center justify-center p-5">
				<h1 className="uppercase font-bold text-xl">Welcome Back</h1>
			</div>
			<div className="w-1/2 sm:w-full md:w-full h-full">
				<div className="w-full h-full flex items-center justify-center flex-col gap-10 p-10">
					<h1 className="font-bold text-lg">Login</h1>
					<div className="w-full flex gap-2">
						<div className="w-1/2 bg-slate-100 dark:bg-slate-900 rounded-md p-1 border border-slate-400 cursor-pointer">
							<Image
								src={"/icons/icons8-google.svg"}
								width={35}
								height={35}
								alt="not found"
								className="mx-auto"
							/>
						</div>
						<div className="w-1/2 bg-slate-100 dark:bg-slate-900 rounded-md p-1 border border-slate-400 cursor-pointer">
							<Image
								src={"/icons/icons8-github.svg"}
								width={35}
								height={35}
								alt="not found"
								className="mx-auto"
							/>
						</div>
					</div>
					<div className="w-full h-auto space-y-5 ">
						<div className="w-auto h-auto relative">
							<Input required className="z-[1] bg-transparent" />
							<Label
								className="absolute text-slate-700 dark:text-slate-100 top-1/2 left-3 px-2 pointer-events-none -translate-y-1/2 ease-in-out delay-75 transition-all label-text"
								htmlFor="email">
								Email
							</Label>
						</div>
						<div className="w-auto h-auto relative">
							<Input type="password" required className="bg-transparent" />
							<Label
								className="absolute text-slate-700 dark:text-slate-100 top-1/2 left-3 px-2 pointer-events-none -translate-y-1/2 ease-in-out delay-75 transition-all label-text"
								htmlFor="password">
								Password
							</Label>
						</div>
						<div className="w-full">
							<Button className="w-full bg-purple-700 dark:text-slate-100 hover:bg-purple-500">
								Login
							</Button>
						</div>
					</div>
					<Link
						href={"/register"}
						className="hover:text-purple-700 ease-linear delay-200">
						Create new account?
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
