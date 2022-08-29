const questions = [];
const getCurrentQuestion = () => questions[0];
const removeAnsweredQuestion = () => questions.shift();

let stage = 1;
const getCurrentStage = () => stage;
const incrementCurrentStage = () => stage++;

const stageWinnings = [
	100, 200, 300, 400, 500, 1000, 1500, 2000, 3000, 5000, 10000, 20000, 30000, 50000, 100000,
];

const stagesDifficulty = ["easy", "medium", "hard"];
const getNextStageDifficulty = () => stagesDifficulty.shift();

const hints = ["ask-audience", "fifty-fifty", "call-a-friend"];

const resetInitialGameValues = () => {
	questions.splice(0);

	stage = 1;

	stagesDifficulty.splice(0);
	stagesDifficulty.push("easy", "medium", "hard");

	hints.splice(0);
	hints.push("ask-audience", "fifty-fifty", "call-a-friend");
};

export {
	questions,
	getCurrentQuestion,
	removeAnsweredQuestion,
	stage,
	getCurrentStage,
	incrementCurrentStage,
	stageWinnings,
	stagesDifficulty,
	getNextStageDifficulty,
	hints,
	resetInitialGameValues,
};
