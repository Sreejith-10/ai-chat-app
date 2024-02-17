"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import "../auth.css";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "@/schemas/registerScehma";
import FormError from "@/components/formerr";
import FormSuccess from "@/components/formsuccess";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {useState} from "react";

const RegisterPage = () => {
	const [showPass, setShowPass] = useState(false);
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof registerSchema>) => {
		console.log(values);
	};

	return (
		<section className="w-[900px] h-[500px] min-h-[600px] sm:w-[350px] md:w-[500px] flex flex-row-reverse bg-slate-100 dark:bg-slate-900 rounded-md shadow-xl animate-fade-op">
			<div className="w-1/2 h-full sm:hidden md:hidden rounded-tr-md rounded-br-md bg-purple-700 rounded-tl-md rounded-bl-md clip-reverse flex items-center justify-center p-5">
				<h1 className="uppercase font-bold text-xl text-white">Good morning</h1>
			</div>
			<div className="w-1/2 sm:w-full md:w-full h-full">
				<div className="w-full h-full flex items-center justify-evenly flex-col gap-10 p-10">
					<h1 className="font-bold text-lg">Sign Up</h1>
					<div className="w-full flex gap-2">
						<div className="w-1/2 bg-transparent rounded-md p-1 border border-slate-400 cursor-pointer">
							<Image
								src={"/icons/icons8-google.svg"}
								width={35}
								height={35}
								alt="not found"
								className="mx-auto"
								priority
							/>
						</div>
						<div className="w-1/2 bg-transparent rounded-md p-1 border border-slate-400 cursor-pointer">
							<Image
								src={"/icons/icons8-github.svg"}
								width={35}
								height={35}
								alt="not found"
								className="mx-auto"
								priority
							/>
						</div>
					</div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full h-auto flex flex-col gap-5">
							<FormField
								control={form.control}
								name="name"
								render={({field}) => (
									<FormItem className="w-auto h-auto relative space-y-0">
										<FormControl>
											<Input
												{...field}
												className="input-area bg-transparent"
												required
											/>
										</FormControl>
										<FormLabel className="absolute font-bold text-sm pointer-events-none ease-in-out delay-100 duration-200 top-1/2 left-3 -translate-y-1/2 label-text">
											Name
										</FormLabel>
										<FormMessage />
									</FormItem>
								)}
							/>
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
										<FormLabel className="absolute font-bold text-sm pointer-events-none ease-in-out delay-100 duration-200  top-1/2 left-3 -translate-y-1/2 label-text">
											Email
										</FormLabel>
										<FormMessage />
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
										<FormLabel className="absolute font-bold text-sm pointer-events-none ease-in-out delay-100 duration-200 top-1/2 left-3 -translate-y-1/2 label-text">
											Password
										</FormLabel>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormError message="" />
							<FormSuccess message="" />
							<Button
								type="submit"
								className="w-full bg-purple-700 dark:text-slate-100 hover:bg-purple-500">
								SignUp
							</Button>
						</form>
						<span>
							<Link
								className="hover:text-purple-700 ease-linear delay-200"
								href={"/login"}>
								Alredady have an account ?
							</Link>
						</span>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default RegisterPage;
