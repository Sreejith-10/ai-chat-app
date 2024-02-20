"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useRouter} from "next/navigation";

const PasswordResetPage = () => {
	const router = useRouter();
	const click = () => {
		router.push("/verification");
	};
	return (
		<section className="w-[500px] h-auto bg-slate-50 rounded-md shadow-2xl flex flex-col gap-10 items-center py-10 px-5">
			<div className="w-full text-center">
				<h1 className="font-bold text-xl">Reset Password</h1>
			</div>
			<div className="w-full space-y-5">
				<Label className="font-semibold text-sm">Enter your email</Label>
				<Input />
			</div>
			<div className="w-full">
				<Button onClick={click} className="float-right">
					Send Reset Code
				</Button>
			</div>
		</section>
	);
};

export default PasswordResetPage;
