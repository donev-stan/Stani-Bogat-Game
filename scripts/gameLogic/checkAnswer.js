import playCorrectSoundAtStage from "../music/playSoundAtStage.js";
import { loadCorrectAnswer } from "../music/sounds.js";
import {
	getCurrentQuestion,
	getCurrentStage,
	incrementCurrentStage,
	removeAnsweredQuestion,
	timer,
} from "../variables.js";
import { questionAndAnswers } from "../visualizations/elements.js";
import renderEndGameModal from "../visualizations/renderEndGameModal.js";
import renderNextQuestionAndAnswers from "../visualizations/renderNextQuestionAndAnswers.js";

const checkAnswer = (event, chosenAnswer) => {
	clearInterval(timer);

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
			loadCorrectAnswer().play();

			if (getCurrentStage() === 16) {
				return renderEndGameModal("game-won");
			}

			playCorrectSoundAtStage();

			setTimeout(() => {
				removeCorrectAnswer(selectedBtn);
				renderNextQuestionAndAnswers();
			}, 1000);
		} else {
			questionAndAnswers.correctAnswerBtn(correct_answer_option).classList.add("answer-correct");
			renderEndGameModal("wrong-answer");
		}
	}, 500);
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
