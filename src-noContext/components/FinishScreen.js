import { useContext } from "react";
import QuizContext from "../Context/QuizContext";

function FinishScreen() {
	const { points, highScore, dispatch, maxPossiblePoints } =
		useContext(QuizContext);
	const precentage = (points / maxPossiblePoints) * 100;

	return (
		<>
			<p className="result">
				You Scored <strong>{points}</strong> Out of {maxPossiblePoints} (
				{Math.ceil(precentage)} %)
			</p>
			<p className="highscore">(HighScore: {highScore} points)</p>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "restart" })}
			>
				Restart Quiz
			</button>
		</>
	);
}

export default FinishScreen;
