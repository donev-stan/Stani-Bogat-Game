import { hintElements } from "./elements.js";

const renderResetHints = () => {
	hintElements.askAudienceTaken().style.display = "none";
	hintElements.fiftyFiftyTaken().style.display = "none";
	hintElements.callAfriendTaken().style.display = "none";
};

export default renderResetHints;
