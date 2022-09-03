import fetchData from "../services/fetchData.js";
import { displayPlayPanel } from "../visualizations/renderPanels.js";
import renderNextQuestionAndAnswers from "../visualizations/renderNextQuestionAndAnswers.js";
import { getNextStageDifficulty, resetInitialGameValues, sounds, timer, volume } from "../variables.js";
import { renderResetStages } from "../visualizations/renderStage.js";
import renderResetHints from "../visualizations/renderResetHints.js";
import playCorrectSoundAtStage from "../music/playSoundAtStage.js";

const startGame = async () => {
	clearInterval(timer);
	document.querySelector(".logo-img").classList.add("loading");

	resetInitialGameValues();
	await fetchData(getNextStageDifficulty());
	displayPlayPanel();
	renderResetStages();
	renderResetHints();
	renderNextQuestionAndAnswers();

	document.querySelector(".logo-img").classList.remove("loading");

	playCorrectSoundAtStage();

	sounds.letsPlayAudio.play();
	sounds.letsPlayAudio.volume = volume !== 0 ? 0.2 : volume;
};

export default startGame;
