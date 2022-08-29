import { getCurrentQuestion, incrementCurrentStage, removeAnsweredQuestion } from "../variables.js";
import { modalElements, questionAndAnswers } from "../visualizations/elements.js";
import renderNextQuestionAndAnswers from "../visualizations/renderNextQuestionAndAnswers.js";

const checkAnswer = (event, chosenAnswer) => {
	const { correct_answer_option } = getCurrentQuestion();

	const isSpanSelected = event.target.tagName === "SPAN";
	let selectedBtn = isSpanSelected ? event.target.parentElement : event.target;

	disableAllButtons();
	displaySelectedAnswer(selectedBtn);

	setTimeout(() => {
		if (correct_answer_option === chosenAnswer) {
			removeAnsweredQuestion();
			incrementCurrentStage();

			displayCorrectAnswer(selectedBtn);

			setTimeout(() => {
				removeCorrectAnswer(selectedBtn);
				renderNextQuestionAndAnswers();
			}, 1000);
		} else {
			questionAndAnswers.correctAnswerBtn(correct_answer_option).classList.add("answer-correct");

			modalElements.modalEndGame().style.display = "flex";
			// setTimeout(() => {
			// 	// questionAndAnswers.correctAnswerBtn(correct_answer_option).classList.remove("correct");
			// }, 1000);
		}
	}, 300);
};

const disableAllButtons = () => {
	questionAndAnswers.answers().forEach((answerBtn) => (answerBtn.disabled = true));
};

const displaySelectedAnswer = (selectedBtn) => {
	selectedBtn.classList.add("answer-selected");
	selectedBtn.firstChild.style.color = "black";
};

const displayCorrectAnswer = (selectedBtn) => {
	selectedBtn.classList.remove("answer-selected");
	selectedBtn.classList.add("answer-correct");
};

const removeCorrectAnswer = (selectedBtn) => {
	selectedBtn.classList.remove("answer-correct");
	// selectedBtn.classList.remove("answer-selected");
};

export default checkAnswer;
