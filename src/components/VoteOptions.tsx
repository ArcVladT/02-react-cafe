import css from "../styles/VoteOptions.module.css";

interface VoteFunc {
	handleVote: (type: React.MouseEvent<HTMLButtonElement>) => void;
	resetVotes: (type: React.MouseEvent<HTMLButtonElement>) => void;
	canReset: () => boolean;
}

export default function VoteOptions({
	handleVote,
	resetVotes,
	canReset,
}: VoteFunc) {
	return (
		<>
			<div className={css.container}>
				<button onClick={handleVote} className={css.button}>
					Good
				</button>
				<button onClick={handleVote} className={css.button}>
					Neutral
				</button>
				<button onClick={handleVote} className={css.button}>
					Bad
				</button>
				{canReset() && (
					<button onClick={resetVotes} className={`${css.button} ${css.reset}`}>
						Reset
					</button>
				)}
			</div>
		</>
	);
}
