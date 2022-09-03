import playCorrectSoundAtStage from "../music/playSoundAtStage.js";
import { loadCorrectAnswer, loadFirstStageAudio, loadWrongAnswer } from "../music/sounds.js";
import {
	getCurrentQuestion,
	getCurrentStage,
	incrementCurrentStage,
	removeAnsweredQuestion,
	timer,
} from "../variables.js";
import { modalElements, questionAndAnswers } from "../visualizations/elements.js";
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

			if (getCurrentStage() === 6) {
				console.log("You secured a price! 500лв");
			} else if (getCurrentStage() === 11) {
				console.log("You secured a price! 5 000лв");
			}

			if (getCurrentStage() === 16) {
				modalElements.modalEndGame().style.display = "flex";
				document.getElementById("money-to-go").textContent = "100 000";
			}

			setTimeout(() => {
				removeCorrectAnswer(selectedBtn);
				renderNextQuestionAndAnswers();
			}, 1000);
		} else {
			loadWrongAnswer().play();
			questionAndAnswers.correctAnswerBtn(correct_answer_option).classList.add("answer-correct");

			modalElements.modalEndGame().style.display = "flex";

			if (getCurrentStage() <= 5) {
				document.getElementById("money-to-go").textContent = "0";
			} else if (getCurrentStage() > 5 && getCurrentStage() <= 10) {
				document.getElementById("money-to-go").textContent = "500";
			} else if (getCurrentStage() > 10 && getCurrentStage() < 15) {
				document.getElementById("money-to-go").textContent = "5 000";
			}
		}
	}, 500);

	playCorrectSoundAtStage();
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
