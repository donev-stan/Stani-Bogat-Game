import { mainElements, modalElements } from "./elements.js";

const displayPlayPanel = () => {
	modalElements.modalEndGame().style.display = "none";
	mainElements.start_panel().style.display = "none";
	mainElements.play_panel().style.display = "flex";
};

const displayStartPanel = () => {
	mainElements.start_panel().style.display = "flex";
	mainElements.play_panel().style.display = "none";
};

export { displayPlayPanel, displayStartPanel };
