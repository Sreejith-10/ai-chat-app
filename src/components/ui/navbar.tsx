"use client";

import {useTheme} from "next-themes";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";
import {Moon, Sun} from "lucide-react";

const NavBar = () => {
	const {theme, setTheme} = useTheme();

	return (
		<nav className="w-full h-auto flex items-center justify-between">
			<span>
				<Select>
					<SelectTrigger className="w-[150px]">
						<SelectValue placeholder="Gemini" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="gemini">Gemini</SelectItem>
						<SelectItem value="chatgpt">Chat gpt</SelectItem>
					</SelectContent>
				</Select>
			</span>
			<span>
				<h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
					Genartive Ai
				</h3>
			</span>
			<span className="flex items-center gap-10">
				{theme === "light" ? (
					<Moon onClick={() => setTheme("dark")} />
				) : (
					<Sun onClick={() => setTheme("light")} />
				)}
				<DropdownMenu>
					<DropdownMenuTrigger className="shadow-md py-2 px-4 rounded-full font-bold bg-emerald-500 text-white border border-slate-200">
						S
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Available</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Account</DropdownMenuItem>
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</span>
		</nav>
	);
};

export default NavBar;
