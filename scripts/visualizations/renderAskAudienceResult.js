import { hintElements, modalElements } from "./elements.js";

const renderAskAudienceResult = (persentages) => {
	displayHintTaken();
	displayHintModal();

	setTimeout(() => {
		audience(persentages);
	}, 100);
};

function audience(array) {
	const persentage = [...array];

	const divOne = document.getElementById("one");
	const divOnePercentage = document.getElementById("onePercentage");
	const divTwo = document.getElementById("two");
	const divTwoPercentage = document.getElementById("twoPercentage");
	const divThree = document.getElementById("three");
	const divThreePercentage = document.getElementById("threePercentage");
	const divFoure = document.getElementById("four");
	const divFourPercentage = document.getElementById("fourPercentage");
	divOne.style.height = 100 - persentage[0] + "px";
	divOnePercentage.style.top = 100 - persentage[0] + "px";
	divOnePercentage.innerHTML = persentage[0] + "%";

	divTwo.style.height = 100 - persentage[1] + "px";
	divTwoPercentage.style.top = 100 - persentage[1] + "px";
	divTwoPercentage.innerHTML = persentage[1] + "%";

	divThree.style.height = 100 - persentage[2] + "px";
	divThreePercentage.style.top = 100 - persentage[2] + "px";
	divThreePercentage.innerHTML = persentage[2] + "%";

	divFoure.style.height = 100 - persentage[3] + "px";
	divFourPercentage.style.top = 100 - persentage[3] + "px";
	divFourPercentage.innerHTML = persentage[3] + "%";
}

const displayHintTaken = () => {
	hintElements.askAudienceTaken().style.display = "flex";
};

const displayHintModal = () => {
	modalElements.modalAskAudienceHint().style.display = "flex";
};

export default renderAskAudienceResult;
