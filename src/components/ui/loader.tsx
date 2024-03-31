const Loader = () => {
	return (
		<div className="w-full h-auto space-y-4">
			<div className="w-full h-7 rounded-[40px] bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse delay-75"></div>
			<div className="w-full h-7 rounded-[40px] bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse delay-100"></div>
			<div className="w-1/2 h-7 rounded-[40px] bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse delay-150"></div>
		</div>
	);
};

export default Loader;
