import { useContext, useEffect } from "react";
import QuizContext from "../Context/QuizContext";

function Timer() {
		const { secondsRemaining,dispatch } = useContext(QuizContext);

	const mins = Math.floor(secondsRemaining / 60);
	const secs = secondsRemaining % 60;
	useEffect(
		function () {
			const int = setInterval(function () {
				dispatch({ type: "tick" });
			}, 1000);

			return () => clearInterval(int);
		},
		[dispatch]
	);

	return (
		<div className="timer">
			{mins < 10 && "0"}
			{mins}:{secs < 10 && "0"}
			{secs}
		</div>
	);
}

export default Timer;
