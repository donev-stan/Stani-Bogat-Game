const startPanelElements = {
	startBtn: () => document.getElementById("start-game-btn"),
};

const mainElements = {
	start_panel: () => document.querySelector(".start-panel"),
	play_panel: () => document.querySelector(".play-panel"),
};

const questionAndAnswers = {
	question: () => document.querySelector(".question-text"),
	questionIndex: () => document.getElementById("questionIndex"),
	answerOptions: () => document.querySelectorAll(".answer-option"),

	answers: () => document.querySelectorAll(".answer-btn"),

	correctAnswerBtn: (option) => document.querySelector(`.answer-btn-${option}`),

	answerA: () => document.querySelector(".answer-btn-A"),
	answerB: () => document.querySelector(".answer-btn-B"),
	answerC: () => document.querySelector(".answer-btn-C"),
	answerD: () => document.querySelector(".answer-btn-D"),
};

const stageElements = {
	allStages: () => document.querySelectorAll(".stage"),
	getStage: (stageId) => document.querySelector(`.stage-${stageId}`),
	lastStage: () => document.querySelector(".stage-active"),
};

const hintElements = {
	askAudience: () => document.querySelector(".hint-askAudience"),
	fiftyFifty: () => document.querySelector(".hint-fiftyFifty"),
	callAfriend: () => document.querySelector(".hint-callAfriend"),

	askAudienceTaken: () => document.querySelector(".hint-askAudienceTaken"),
	fiftyFiftyTaken: () => document.querySelector(".hint-fiftyFiftyTaken"),
	callAfriendTaken: () => document.querySelector(".hint-callAfriendTaken"),
};

const modalElements = {
	modalEndGame: () => document.getElementById("modal-end-game"),
	playAgainBtn: () => document.querySelector(".play-again-btn"),

	modalCallAfriendHint: () => document.getElementById("modal-call-a-friend"),
	modalCallAfriendText: () => document.querySelector(".call-a-friend-text"),
	modalCallAfriendCloseBtn: () => document.querySelector(".close-call-a-friend-modal"),
};

export { startPanelElements, mainElements, questionAndAnswers, stageElements, hintElements, modalElements };
