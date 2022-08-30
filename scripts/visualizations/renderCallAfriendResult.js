import { hintElements, modalElements } from "./elements.js";

const renderCallAfriendResult = (message) => {
	displayHintTaken();
	displayHintModal();

	setModalText(message);
	console.log(message);
};

const displayHintTaken = () => {
	hintElements.callAfriendTaken().style.display = "flex";
};

const displayHintModal = () => {
	modalElements.modalCallAfriendHint().style.display = "flex";
};

const setModalText = (message) => {
	modalElements.modalCallAfriendText().innerText = message;
};
export default renderCallAfriendResult;
