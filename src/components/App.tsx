import { useState } from "react";
import css from "../styles/App.module.css";
import CafeInfo from "./CafeInfo";

import VoteOptions from "./VoteOptions";

import type { Votes } from "../types/votes";
import type { VoteType } from "../types/votes";

import VoteStats from "./VoteStats";
import Notification from "./Notification";

function App() {
	const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

	const totalVotes = votes.good + votes.bad + votes.neutral;
	const positiveRate = totalVotes
		? Math.round((votes.good / totalVotes) * 100)
		: 0;

	const handleVote = (type: React.MouseEvent<HTMLButtonElement>) => {
		const text = type.currentTarget.textContent.toLowerCase() as VoteType;
		setVotes({
			...votes,
			[text]: votes[text] + 1,
		});
	};

	const resetVotes = () => {
		setVotes({
			...votes,
			good: 0,
			neutral: 0,
			bad: 0,
		});
	};

	const canReset = () => {
		return totalVotes ? true : false;
	};

	return (
		<>
			<div className={css.app}>
				<CafeInfo />
				<VoteOptions
					handleVote={handleVote}
					resetVotes={resetVotes}
					canReset={canReset}
				/>
				{totalVotes ? (
					<VoteStats
						votes={votes}
						totalVotes={totalVotes}
						positiveRate={positiveRate}
					/>
				) : (
					<Notification />
				)}
			</div>
		</>
	);
}

export default App;
