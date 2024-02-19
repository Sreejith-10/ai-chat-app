import * as React from "react";

import {cn} from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onkeydown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({className, type, onchange, onkeydown, ...props}, ref) => {
		return (
			<input
				onChange={onchange}
				onKeyDown={onkeydown}
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm border-slate-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export {Input};
