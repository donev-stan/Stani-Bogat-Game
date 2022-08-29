import { stageElements } from "./elements.js";

const renderResetStages = () => {
	stageElements.allStages().forEach((stage, i) => {
		stage.classList.remove("stage-done");
		stage.classList.remove("stage-active");
		if (i === 14) stage.classList.add("stage-active");
	});
};

export default renderResetStages;
