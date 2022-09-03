import { hintElements, questionAndAnswers } from "./elements.js";
import { questions } from "../variables.js";

const renderFiftyFiftyResult = () => {
	displayHintTaken();

	const answerBtns = questionAndAnswers.answers();
	const answers = questions[0].answers;

	answerBtns.forEach((answerBtn) => {
		const answerText = answerBtn.textContent.slice(3);

		if (!answers.includes(answerText)) {
			answerBtn.textContent = "";
			answerBtn.disabled = true;
			answerBtn.style.cursor = "auto";
		}
	});
};

const displayHintTaken = () => {
	hintElements.fiftyFiftyTaken().style.display = "flex";
};

export default renderFiftyFiftyResult;
