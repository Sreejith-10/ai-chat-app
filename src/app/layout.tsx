import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme/ThemeProvider";
import ProviderWrapper from "@/redux/ProviderWrapper";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Chat App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ProviderWrapper>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</ProviderWrapper>
			</body>
		</html>
	);
}
