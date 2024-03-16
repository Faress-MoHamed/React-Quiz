import { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Options from "./Options";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import QuizContext from "../Context/QuizContext";

export default function App() {
	const { status } = useContext(QuizContext);

	return (
		<div className="app">
			<Header></Header>
			<Main>
				{status === "loading" && <Loader></Loader>}
				{status === "error" && <Error></Error>}
				{status === "ready" && <StartScreen></StartScreen>}
				{status === "active" && (
					<>
						<Progress></Progress>
						<Question>
							<Options></Options>
						</Question>
						<Footer>
							<Timer></Timer>
							<NextButton></NextButton>
						</Footer>
					</>
				)}
				{status === "finished" && <FinishScreen></FinishScreen>}
			</Main>
		</div>
	);
}

/*
						
								points={points}
								index={index}
								maxPossiblePoints={maxPossiblePoints}
								question={questions[index]}
								numQuestions={numQuestions}
								dispatch={dispatch}
								answer={answer}
						*/
