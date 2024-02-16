import React from "react";

const Message = ({name}: any) => {
	return (
		<div className="w-full h-auto">
			<div className="w-full flex items-center gap-5">
				<i className="bg-emerald-600 rounded-full w-8 h-8">M</i>
				<h2 className="font-bold">{name}</h2>
			</div>
			<p className="pl-14">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a
				aliquam quidem magnam ut distinctio, voluptatum omnis voluptatem at
				amet?
			</p>
		</div>
	);
};

export default Message;
