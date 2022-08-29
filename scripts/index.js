import attachEventListeners from "./eventListeners.js";
import startGame from "./gameLogic/gameStart.js";

window.onload = () => {
	attachEventListeners();
	startGame();
};
