import { mainElements } from "./elements.js";

const displayPlayPanel = () => {
	mainElements.start_panel().style.display = "none";
	mainElements.play_panel().style.display = "flex";
};

const displayStartPanel = () => {
	mainElements.start_panel().style.display = "flex";
	mainElements.play_panel().style.display = "none";
};

export { displayPlayPanel, displayStartPanel };
