import fetchData from "./fetchData.js";
import populateQuestions from "./populateQuestions.js";
import { startPanelElements, mainElements } from "./elements.js";

window.onload = () => {
	startPanelElements.startBtn().addEventListener("click", () => startGame());
};

const startGame = () => {
	fetchData().then((data) => {
		populateQuestions(data);
		switchPanels();
		// renderQuestions();
	});
};

const switchPanels = () => {
	if (mainElements.start_panel().style.display === "flex") {
		mainElements.start_panel().style.display = "none";
		mainElements.play_panel().style.display = "flex";
	} else {
		mainElements.start_panel().style.display = "flex";
		mainElements.play_panel().style.display = "none";
	}
};
