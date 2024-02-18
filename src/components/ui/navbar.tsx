"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu";

const NavBar = () => {
	return (
		<nav>
			<span>
				<DropdownMenu>
					<DropdownMenuTrigger className="shadow-md py-2 px-4 rounded-md border border-slate-200">
						Gemini Ai
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Available</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Gemini</DropdownMenuItem>
						<DropdownMenuItem>Chatgpt</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</span>
		</nav>
	);
};

export default NavBar;
