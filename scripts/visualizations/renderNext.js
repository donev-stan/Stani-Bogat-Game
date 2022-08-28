import fetchQuestions from "../services/fetchData.js";
import { questions, stages, stagesDifficulty } from "../variables.js";
import { questionAndAnswers } from "./elements.js";
import renderStage from "./renderStage.js";

const renderNext = () => {
	if (questions.length === 1) fetchQuestions(stagesDifficulty.shift());

	const currentQuestion = questions[0];

	console.log(currentQuestion.correct_answer);

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
	});

	console.log(currentQuestion);

	questionAndAnswers.questionIndex().innerHTML = stages[0];

	if (stages[0] !== 1) renderStage();
};

const renderAnswer = (answerOption, answer) => {
	return `<span class="answer-option">${answerOption}:&nbsp;</span>${answer}`;
};

export default renderNext;
