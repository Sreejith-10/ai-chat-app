"use client";

import {Button} from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {passwordRestSchema} from "@/schemas/passwordResetSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {useForm} from "react-hook-form";
import * as z from "zod";

const NewPasswordPage = () => {
	const form = useForm<z.infer<typeof passwordRestSchema>>({
		resolver: zodResolver(passwordRestSchema),
		defaultValues: {
			newPassword: "",
		},
	});

	const resetPasswordHandler = (values: z.infer<typeof passwordRestSchema>) => {
		console.log(values);
	};

	return (
		<section className="w-[500px] h-auto bg-slate-50 rounded-md shadow-2xl flex flex-col gap-10 items-center py-10 px-5">
			<div className="w-full text-center">
				<h1 className="font-bold text-xl">New Password</h1>
			</div>
			<div className="w-full space-y-5">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(resetPasswordHandler)}>
						<FormField
							control={form.control}
							name="newPassword"
							render={({field}) => (
								<FormItem>
									<FormLabel>New password</FormLabel>
									<FormControl>
										<Input {...field} required />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="w-full pt-10">
							<Button
								type="button"
								className="bg-destructive hover:bg-destructive/90">
								Cancel
							</Button>
							<Button type="submit" className="float-right">
								Update Password
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default NewPasswordPage;
