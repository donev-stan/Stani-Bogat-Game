import {
	startPanelElements,
	questionAndAnswers,
	hintElements,
	modalElements,
	mainElements,
} from "./visualizations/elements.js";

import startGame from "./gameLogic/gameStart.js";
import checkAnswer from "./gameLogic/checkAnswer.js";
import { askAudience, fiftyFifty, callAfriend } from "./gameLogic/hints.js";
import { getCurrentStage, toggleMuteSounds, stageWinnings } from "./variables.js";

const attachEventListeners = () => {
	startPanelElements.startBtn().addEventListener("click", () => startGame());

	// Answers
	questionAndAnswers.answerA().addEventListener("click", (event) => checkAnswer(event, "A"));
	questionAndAnswers.answerB().addEventListener("click", (event) => checkAnswer(event, "B"));
	questionAndAnswers.answerC().addEventListener("click", (event) => checkAnswer(event, "C"));
	questionAndAnswers.answerD().addEventListener("click", (event) => checkAnswer(event, "D"));

	// Hints
	hintElements.askAudience().addEventListener("click", () => askAudience());
	hintElements.fiftyFifty().addEventListener("click", () => fiftyFifty());
	hintElements.callAfriend().addEventListener("click", () => callAfriend());
	modalElements
		.modalCallAfriendCloseBtn()
		.addEventListener("click", () => (modalElements.modalCallAfriendHint().style.display = "none"));

	modalElements
		.modalAskAudienceCloseBtn()
		.addEventListener("click", () => (modalElements.modalAskAudienceHint().style.display = "none"));

	// Modal
	modalElements.playAgainBtn().addEventListener("click", () => startGame());

	mainElements.stopGameBtn().addEventListener("click", () => {
		modalElements.modalEndGame().style.display = "flex";
		document.getElementById("money-to-go").textContent = stageWinnings[getCurrentStage() - 2] || 0;
	});

	mainElements.gameSoundsBtn().addEventListener("click", () => toggleMuteSounds());
};

export default attachEventListeners;
