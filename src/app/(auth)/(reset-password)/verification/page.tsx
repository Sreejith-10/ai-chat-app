"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";

const CodeVerificationPage = () => {
	const router = useRouter();
	const click = () => {
		router.push("/reset");
	};
	return (
		<section className="w-[500px] h-auto bg-slate-50 rounded-md shadow-2xl flex flex-col gap-10 items-center py-10 px-5">
			<div className="w-full text-center">
				<h1 className="font-bold text-xl">Password reset code</h1>
			</div>
			<div className="w-full space-y-5">
				<Label className="font-semibold text-sm">Enter code</Label>
				<Input />
			</div>
			<div className="w-full">
				<Link
					href={"/email"}
					className="hover:text-purple-700 ease-linear delay-200">
					Did'nt get the code ?{" "}
				</Link>
				<Button onClick={click} className="float-right">
					Submit
				</Button>
			</div>
		</section>
	);
};

export default CodeVerificationPage;
