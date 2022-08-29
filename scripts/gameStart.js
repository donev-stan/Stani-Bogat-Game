import fetchData from "./services/fetchData.js";
import { displayPlayPanel } from "./visualizations/renderPanels.js";
import renderNextQuestionAndAnswers from "./visualizations/renderNextQuestionAndAnswers.js";
import {
	getNextStageDifficulty,
	hints,
	questions,
	resetInitialGameValues,
	stagesDifficulty,
} from "./variables.js";
import { modalElements } from "./visualizations/elements.js";
import renderResetStages from "./visualizations/renderResetStages.js";

const startGame = async () => {
	resetInitialGameValues();
	await fetchData(getNextStageDifficulty());
	displayPlayPanel();
	renderResetStages();
	renderNextQuestionAndAnswers();
};

const setInitialGameValues = () => {
	questions.splice(0);

	stages.splice(0);
	for (let i = 1; i <= 15; i++) stages.push(i);

	stagesDifficulty.splice(0);
	stagesDifficulty.push("easy", "medium", "hard");

	hints.splice(0);
	hints.push("ask-audience", "fifty-fifty", "call-a-friend");

	modalElements.modalEndGame().style.display = "none";
};

export default startGame;
