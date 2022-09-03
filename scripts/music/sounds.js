import { volume } from "../variables.js";

const loadLetsPlaySound = () => {
	const audio = loadAudio("sounds/lets-play.mp3");
	audio.volume = volume;
	return audio;
};

const loadMainTheme = () => {
	const audio = loadAudio("sounds/main-theme.mp3");
	audio.volume = volume;
	return audio;
};

const loadWrongAnswer = () => {
	const audio = loadAudio("sounds/wrong-answer.mp3");
	audio.volume = volume;
	return audio;
};

const loadCorrectAnswer = () => {
	const audio = loadAudio("sounds/correct-answer.mp3");
	audio.volume = volume;
	return audio;
};

const loadFinalAnswer = () => {
	const audio = loadAudio("sounds/final-answer.mp3");
	audio.volume = volume;
	return audio;
};

// Stages
const loadFirstStageAudio = () => {
	const audio = loadAudio("sounds/soundQuestionFrom100To1000.mp3");
	audio.loop = true;
	audio.volume = volume;
	return audio;
};

const loadSecondStageAudio = () => {
	const audio = loadAudio("sounds/soundQuestionFrom1000To50000.mp3");
	audio.loop = true;
	audio.volume = volume;
	return audio;
};

const loadThirdStageAudio = () => {
	const audio = loadAudio("sounds/soundQuestion50000.mp3");
	audio.loop = true;
	audio.volume = volume;
	return audio;
};

const loadFourthStageAudio = () => {
	const audio = loadAudio("sounds/soundQuestion100000.mp3");
	audio.loop = true;
	audio.volume = volume;
	return audio;
};

const loadAudio = (audioName) => new Audio(audioName);

export {
	loadMainTheme,
	loadLetsPlaySound,
	loadCorrectAnswer,
	loadWrongAnswer,
	loadFinalAnswer,
	loadFirstStageAudio,
	loadSecondStageAudio,
	loadThirdStageAudio,
	loadFourthStageAudio,
};
