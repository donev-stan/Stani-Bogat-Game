import {
	startPanelElements,
	questionAndAnswers,
	hintElements,
} from "./visualizations/elements.js";

import { checkAnswer } from "./gameLogic/checkAnswer.js";
import { askAudience, fiftyFifty, callAfriend } from "./gameLogic/hints.js";

import startGame from "./gameStart.js";

const attachEventListeners = () => {
	startPanelElements.startBtn().addEventListener("click", () => startGame());

	// Answers
	questionAndAnswers
		.answerA()
		.addEventListener("click", (event) => checkAnswer(event));

	questionAndAnswers
		.answerB()
		.addEventListener("click", (event) => checkAnswer(event));

	questionAndAnswers
		.answerC()
		.addEventListener("click", (event) => checkAnswer(event));

	questionAndAnswers
		.answerD()
		.addEventListener("click", (event) => checkAnswer(event));

	// Hints
	hintElements.askAudience().addEventListener("click", () => askAudience());
	hintElements.fiftyFifty().addEventListener("click", () => fiftyFifty());
	hintElements.callAfriend().addEventListener("click", () => callAfriend());
};

export default attachEventListeners;
