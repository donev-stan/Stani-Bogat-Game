import { stages } from "../variables.js";
import { stageElements } from "./elements.js";

const renderStage = () => {
	const lastStage = stageElements.lastStage();
	lastStage.classList.add("stage-done");
	lastStage.classList.remove("stage-active");
	stageElements.getStage(stages[0]).classList.add("stage-active");
};

export default renderStage;
