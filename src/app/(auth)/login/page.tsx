"use client";

import {Input} from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import "../auth.css";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {loginSchema} from "@/schemas/loginSchema";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import FormError from "@/components/formerr";
import FormSuccess from "@/components/formsuccess";
import {useRouter} from "next/navigation";
import {setSession} from "@/lib/token";
import axios from "axios";

const LoginPage = () => {
	const router = useRouter();
	const [showPass, setShowPass] = useState(false);
	const [success, setSucces] = useState("");
	const [err, setErr] = useState("");

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const submitHandler = (values: z.infer<typeof loginSchema>) => {
		setErr("");
		setSucces("");
		try {
			axios
				.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/login`, values, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(({data}) => {
					console.log(data);
					setSession(data.token);
					setSucces(data.message);
				})
				.catch(({response: {data}}) => setErr(data.message));
			router.push("/login");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="w-[900px] h-[500px] sm:w-[350px] md:w-[500px] flex bg-slate-100 dark:bg-slate-900 rounded-md shadow-xl animate-fade-op">
			<div className="w-1/2 h-full sm:hidden md:hidden bg-purple-700 text-slate-100 rounded-tl-md rounded-bl-md clip flex items-center justify-center p-5">
				<h1 className="uppercase font-bold text-xl">Welcome Back</h1>
			</div>
			<div className="w-1/2 sm:w-full md:w-full h-full">
				<div className="w-full h-full flex flex-col  items-center justify-center gap-10 p-10">
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
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(submitHandler)}
							className="w-full h-auto flex flex-col gap-5">
							<FormField
								control={form.control}
								name="email"
								render={({field}) => (
									<FormItem className="w-auto h-auto relative space-y-0">
										<FormControl>
											<Input
												{...field}
												className="input-area bg-transparent"
												required
											/>
										</FormControl>
										<FormLabel className="absolute pointer-events-none ease-in-out delay-100 duration-200 text-sm font-bold top-1/2 left-3 -translate-y-1/2 label-text">
											Email
										</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({field}) => (
									<FormItem className="w-auto h-auto relative space-y-0">
										{showPass ? (
											<EyeIcon
												className="absolute cursor-pointer z-10 right-3 top-1/2 -translate-y-1/2"
												onClick={() => setShowPass(false)}
											/>
										) : (
											<EyeOffIcon
												className="absolute cursor-pointer z-10 right-3 top-1/2 -translate-y-1/2"
												onClick={() => setShowPass(true)}
											/>
										)}
										<FormControl>
											<Input
												type={showPass ? "text" : "password"}
												{...field}
												className="input-area bg-transparent"
												required
											/>
										</FormControl>
										<FormLabel className="absolute pointer-events-none text-sm font-bold ease-in-out delay-100 duration-200 top-1/2 left-3 -translate-y-1/2 label-text">
											Password
										</FormLabel>
									</FormItem>
								)}
							/>
							<FormError message={err} />
							<FormSuccess message={success} />
							<Button
								type="submit"
								className="w-full bg-purple-700 dark:text-slate-100 hover:bg-purple-500">
								Login
							</Button>
						</form>
						<span className="w-full flex items-center justify-between">
							<Link
								className="hover:text-purple-700 ease-linear delay-200"
								href={"/register"}>
								Create a new account{" "}
							</Link>
							<Link
								className="hover:text-purple-700 ease-linear delay-200"
								href={"/email"}>
								Forgot password ?
							</Link>
						</span>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
