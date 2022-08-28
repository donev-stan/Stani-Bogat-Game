import startGame from "../gameStart.js";
import { questions, stages } from "../variables.js";
import renderNext from "../visualizations/renderNext.js";

const checkAnswer = (event) => {
	const currentQuestion = questions[0];

	let answer_option;
	let selectedBtn;

	if (event.target.tagName === "SPAN") {
		selectedBtn = event.target.parentElement;
		answer_option = event.target.textContent.slice(0, 1);
	} else {
		selectedBtn = event.target;
		answer_option = event.target.firstChild.textContent.slice(0, 1);
	}

	displaySelectedAnswer(selectedBtn);

	setTimeout(() => {
		if (currentQuestion.correct_answer_option === answer_option) {
			displayCorrectAnswer(selectedBtn);

			setTimeout(() => {
				stages.shift();
				questions.shift();
				renderNext();
				removeCorrectAnswer(selectedBtn);
			}, 1000);
		} else {
			// display the correct answer
			setTimeout(() => {
				startGame();
				// display modal - endGame
			}, 1000);
		}
	}, 200);
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

export { checkAnswer };
