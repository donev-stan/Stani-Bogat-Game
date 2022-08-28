import fetchData from "./services/fetchData.js";
import { displayPlayPanel } from "./visualizations/renderPanels.js";
import renderNext from "./visualizations/renderNext.js";
import { hints, questions, stages, stagesDifficulty } from "./variables.js";

const startGame = async () => {
	setInitialGameValues();
	await fetchData(stagesDifficulty.shift());
	displayPlayPanel();
	renderNext();
};

const setInitialGameValues = () => {
	questions.splice(0);

	stages.splice(0);
	for (let i = 1; i <= 15; i++) stages.push(i);

	stagesDifficulty.splice(0);
	stagesDifficulty.push("easy", "medium", "hard");

	hints.splice(0);
	hints.push("ask-audience", "fifty-fifty", "call-a-friend");
};

export default startGame;
