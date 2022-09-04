import {
	loadFirstStageAudio,
	loadFourthStageAudio,
	loadLetsPlaySound,
	loadSecondStageAudio,
	loadThirdStageAudio,
} from "./music/sounds.js";
import { mainElements } from "./visualizations/elements.js";
import renderEndGameModal from "./visualizations/renderEndGameModal.js";

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
	let timerValue = 61;
	// stage === 1 ? (timerValue = 63) : (timerValue = 61);

	timer = setInterval(() => {
		timerValue--;

		if (timerValue <= 0) {
			clearInterval(timer);
			renderEndGameModal("wrong-answer");
		}

		if (timerValue <= 60) document.getElementById("timer-text").innerHTML = `${timerValue} <br> sec`;
	}, 1000);
};

let volume = 0.3;

const letsPlayAudio = loadLetsPlaySound();
const firstStageAudio = loadFirstStageAudio();
const secondStageAudio = loadSecondStageAudio();
const thirdStageAudio = loadThirdStageAudio();
const fourthStageAudio = loadFourthStageAudio();

const sounds = {
	letsPlayAudio,
	firstStageAudio,
	secondStageAudio,
	thirdStageAudio,
	fourthStageAudio,
};

const stopAllSounds = () => {
	firstStageAudio.pause();
	secondStageAudio.pause();
	thirdStageAudio.pause();
	fourthStageAudio.pause();
};

const toggleMuteSounds = () => {
	if (volume !== 0) {
		volume = 0;
		mainElements.gameSoundsBtn().src = "./images/mute.png";
	} else {
		volume = 0.3;
		mainElements.gameSoundsBtn().src = "./images/unmute.png";
	}

	letsPlayAudio.volume = volume;
	firstStageAudio.volume = volume;
	secondStageAudio.volume = volume;
	thirdStageAudio.volume = volume;
	fourthStageAudio.volume = volume;
};

const resetInitialGameValues = () => {
	questions.splice(0);

	stage = 1;

	stagesDifficulty.splice(0);
	stagesDifficulty.push("easy", "medium", "hard");

	hints.splice(0);
	hints.push("ask-audience", "fifty-fifty", "call-a-friend");

	firstStageAudio.pause();
	secondStageAudio.pause();
	thirdStageAudio.pause();
	fourthStageAudio.pause();
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
	sounds,
	volume,
	toggleMuteSounds,
	stopAllSounds,
};
