import { hintElements } from "./elements.js";

const renderCallAfriendResult = (message) => {
	displayHintTaken();

	console.log(message);
};

const displayHintTaken = () => {
	hintElements.callAfriendTaken().style.display = "flex";
};

export default renderCallAfriendResult;
