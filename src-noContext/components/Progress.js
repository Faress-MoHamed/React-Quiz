import { useContext } from "react";
import QuizContext from "../Context/QuizContext";

function Progress( ) {
	const { index, points, answer, numQuestions, maxPossiblePoints } =
		useContext(QuizContext);
	return (
		<header className="progress">
			<progress max={numQuestions} value={index + Number(answer !== null)} />
			<p>
				Question <strong>{index}</strong>/{numQuestions}
			</p>
			<p>
				<strong>{points}</strong>/{maxPossiblePoints}
			</p>
		</header>
	);
}

export default Progress;
