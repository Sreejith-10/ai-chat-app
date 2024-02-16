const AuthLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<main className="w-screen h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
			{children}
		</main>
	);
};

export default AuthLayout;
