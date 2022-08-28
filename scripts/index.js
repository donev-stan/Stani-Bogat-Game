import attachEventListeners from "./eventListeners.js";
import startGame from "./gameStart.js";

window.onload = () => {
	attachEventListeners();
	startGame();
};
