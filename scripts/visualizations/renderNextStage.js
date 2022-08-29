import { stage } from "../variables.js";
import { stageElements } from "./elements.js";

const renderNextStage = () => {
	const lastStage = stageElements.lastStage();
	lastStage.classList.add("stage-done");
	lastStage.classList.remove("stage-active");
	stageElements.getStage(stage).classList.add("stage-active");
};

export default renderNextStage;
