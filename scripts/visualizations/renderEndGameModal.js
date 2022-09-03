import { getCurrentStage, stageWinnings } from "../variables.js";
import { modalElements } from "./elements.js";

const renderEndGameModal = (leaveOrWrongAns) => {
	modalElements.modalEndGame().style.display = "flex";

	if (leaveOrWrongAns == "leaving") {
		document.getElementById(
			"modal-end-game-msg"
		).innerHTML = `Sorry to <br> see you leave. <br> Try again! <br>`;

		document.getElementById("money-to-go").textContent = stageWinnings[getCurrentStage() - 2] || 0;
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
	} else if (leaveOrWrongAns == "game-won") {
		document.getElementById(
			"modal-end-game-msg"
		).innerHTML = `Congrats, <br> You won the <br> top price! <br>`;

		document.getElementById("money-to-go").textContent = "100 000";
	}
};

export default renderEndGameModal;
