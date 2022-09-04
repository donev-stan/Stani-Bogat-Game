import { loadWrongAnswer } from "../music/sounds.js";
import { getCurrentStage, sounds, stageWinnings } from "../variables.js";
import { modalElements } from "./elements.js";

const renderEndGameModal = (leaveOrWrongAns) => {
	if (modalElements.modalEndGame().style.display !== "none") return;

	modalElements.modalEndGame().style.display = "flex";

	if (leaveOrWrongAns == "leaving") {
		document.getElementById(
			"modal-end-game-msg"
		).innerHTML = `Sorry to <br> see you leave. <br> Try again! <br>`;

		document.getElementById("money-to-go").textContent = stageWinnings[getCurrentStage() - 2] || 0;

		loadWrongAnswer().play();
	} else if (leaveOrWrongAns == "wrong-answer") {
		document.getElementById(
			"modal-end-game-msg"
		).innerHTML = `Sorry, <br> Game over. <br> Try again! <br>`;

		if (getCurrentStage() <= 5) {
			document.getElementById("money-to-go").textContent = "0";
		} else if (getCurrentStage() > 5 && getCurrentStage() <= 10) {
			document.getElementById("money-to-go").textContent = "500";
		} else if (getCurrentStage() > 10 && getCurrentStage() < 15) {
			document.getElementById("money-to-go").textContent = "5 000";
		}

		loadWrongAnswer().play();
	} else if (leaveOrWrongAns == "game-won") {
		document.getElementById(
			"modal-end-game-msg"
		).innerHTML = `Congrats, <br> You won the <br> top price! <br>`;

		document.getElementById("money-to-go").textContent = "100 000";
	}

	sounds.firstStageAudio.pause();
	sounds.secondStageAudio.pause();
	sounds.thirdStageAudio.pause();
	sounds.fourthStageAudio.pause();
};

export default renderEndGameModal;
