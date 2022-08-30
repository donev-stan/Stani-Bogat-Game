import fetchQuestions from "../services/fetchData.js";
import {
	getCurrentQuestion,
	getCurrentStage,
	getNextStageDifficulty,
	questions,
	stage,
	startTimer,
} from "../variables.js";
import { questionAndAnswers } from "./elements.js";
import { renderNextStage } from "./renderStage.js";

const renderNextQuestionAndAnswers = () => {
	startTimer();

	const currentQuestion = getCurrentQuestion();

	if (questions.length === 1) fetchQuestions(getNextStageDifficulty());

	console.log(`Correct Answer: \n ${currentQuestion.correct_answer}`);

	questionAndAnswers.question().innerHTML = currentQuestion.question;

	const answerBtns = questionAndAnswers.answers();

	const options = ["A", "B", "C", "D"];

	answerBtns.forEach((btn, i) => {
		if (currentQuestion.answers[i] === currentQuestion.correct_answer) {
			currentQuestion.correct_answer_option = options[i];
		}

		btn.innerHTML = renderAnswer(options[i], currentQuestion.answers[i]);
		btn.disabled = false;
		btn.style.cursor = "pointer";
		btn.classList.remove("answer-selected");
		btn.classList.remove("answer-correct");
	});

	console.log(currentQuestion);

	questionAndAnswers.questionIndex().innerHTML = getCurrentStage();

	if (stage !== 1) renderNextStage();
};

const renderAnswer = (answerOption, answer) => {
	return `<span class="answer-option">${answerOption}:&nbsp;</span>${answer}`;
};

export default renderNextQuestionAndAnswers;
