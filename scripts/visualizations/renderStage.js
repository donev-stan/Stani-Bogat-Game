import { stage } from "../variables.js";
import { stageElements } from "./elements.js";

const renderNextStage = () => {
	const lastStage = stageElements.lastStage();
	lastStage.classList.add("stage-done");
	lastStage.classList.remove("stage-active");
	stageElements.getStage(stage).classList.add("stage-active");
};

const renderResetStages = () => {
	stageElements.allStages().forEach((stage, i) => {
		stage.classList.remove("stage-done");
		stage.classList.remove("stage-active");
		if (i === 14) stage.classList.add("stage-active");
	});
};

export { renderNextStage, renderResetStages };
