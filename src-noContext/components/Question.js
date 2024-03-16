import { useContext } from "react";
import QuizContext from "../Context/QuizContext";

function Question({ children }) {
	const { questions, index } = useContext(QuizContext);
	const question = questions[index];
	return (
		<div>
			<h4>{question.question}</h4>
			{children}
		</div>
	);
}

export default Question;
