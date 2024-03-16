import { useContext } from "react";
import QuizContext from "../Context/QuizContext";

function Options() {
	const { answer, dispatch, questions, index } = useContext(QuizContext);
	const question = questions[index];
	const hasAnswerd = answer !== null;
	return (
		<div className="options">
			{question.options.map((opt, index) => (
				<button
					className={`btn btn-option ${index === answer ? "answer" : ""} ${
						hasAnswerd
							? index === question.correctOption
								? "correct"
								: "wrong"
							: ""
					}`}
					key={opt}
					disabled={hasAnswerd}
					onClick={() => dispatch({ type: "newAnswer", payload: index })}
				>
					{opt}
				</button>
			))}
		</div>
	);
}

export default Options;
