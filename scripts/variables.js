import { modalElements } from "./visualizations/elements.js";

const questions = [];
const getCurrentQuestion = () => questions[0];
const removeAnsweredQuestion = () => questions.shift();

let stage = 1;
const getCurrentStage = () => stage;
const incrementCurrentStage = () => stage++;

const stageWinnings = [
	100, 200, 300, 400, 500, 1000, 1500, 2000, 3000, 5000, 10000, 20000, 30000, 50000, 100000,
];

const stagesDifficulty = ["easy", "medium", "hard"];
const getNextStageDifficulty = () => stagesDifficulty.shift();

const hints = ["ask-audience", "fifty-fifty", "call-a-friend"];
const removeHint = (hintName) => hints.splice(hints.indexOf(hintName), 1);

let timer;
const startTimer = () => {
	let timerValue = 20;

	timer = setInterval(() => {
		timerValue--;

		if (timerValue <= 0) {
			clearInterval(timer);
			modalElements.modalEndGame().style.display = "flex";
		}

		document.getElementById("timer-text").innerHTML = `${timerValue} <br> sec`;
	}, 1000);
};

const resetInitialGameValues = () => {
	questions.splice(0);

	stage = 1;

	stagesDifficulty.splice(0);
	stagesDifficulty.push("easy", "medium", "hard");

	hints.splice(0);
	hints.push("ask-audience", "fifty-fifty", "call-a-friend");
};

export {
	questions,
	getCurrentQuestion,
	removeAnsweredQuestion,
	stage,
	getCurrentStage,
	incrementCurrentStage,
	stageWinnings,
	stagesDifficulty,
	getNextStageDifficulty,
	hints,
	removeHint,
	timer,
	startTimer,
	resetInitialGameValues,
};
