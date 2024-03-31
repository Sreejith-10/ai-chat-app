import {pauseSpeach, textToSpeach} from "@/lib/texttospeach";
import {PauseCircle, Sparkle, Volume2} from "lucide-react";
import {useState} from "react";
import Loader from "./ui/loader";

type ChatsProps = {
	item: {id: number; user: string; message: string; replie: string};
};

const Chats = ({item}: ChatsProps) => {
	const [pause, setPause] = useState(false);

	return (
		<li>
			<span className="flex items-center gap-5">
				<p className="bg-emerald-600 size-10 rounded-full flex items-center justify-center uppercase font-bold text-slate-300">
					l
				</p>
				<p>{item.message}</p>
			</span>
			<span>
				{pause ? (
					<PauseCircle
						className="float-end text-slate-700 mb-3"
						onClick={() => {
							pauseSpeach();
							setPause(false);
						}}
					/>
				) : (
					<Volume2
						className="float-end text-slate-700 mb-3"
						onClick={() => {
							textToSpeach(item.replie);
							setPause(true);
						}}
					/>
				)}
			</span>
			<div className="w-full flex gap-5">
				<div className="w-fit">
					<Sparkle size={30} className=" text-purple-400" />
				</div>
				<div className="w-full">
					{item.replie === "" || undefined ? <Loader /> : <p>{item.replie}</p>}
				</div>
			</div>
		</li>
	);
};

export default Chats;
