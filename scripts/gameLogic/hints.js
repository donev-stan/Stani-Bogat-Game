import {
  questions,
  hints,
  stagesDifficulty,
  getCurrentQuestion,
  removeHint,
} from "../variables.js";
import { questionAndAnswers } from "../visualizations/elements.js";
import renderCallAfriendResult from "../visualizations/renderCallAfriendResult.js";
import renderFiftyFiftyResult from "../visualizations/renderFiftyFiftyResult.js";

const askAudience = () => {
  // if (!hints.includes("ask-audience")) return;
  // hints.splice(hints.indexOf("ask-audience"), 1);
  // const current_question = questions[0];
  // const answers = questionAndAnswers.answers();
};

const fiftyFifty = () => {
  if (!hints.includes("fifty-fifty")) return;

  hints.splice(hints.indexOf("fifty-fifty"), 1);

  const current_question = questions[0];

  while (current_question.answers.length > 2) {
    const correct_answer_index = current_question.answers.indexOf(
      current_question.correct_answer
    );

    const rndIndex = Math.floor(Math.random() * 4);

    if (rndIndex !== correct_answer_index) {
      current_question.answers.splice(rndIndex, 1);
    }
  }

  renderFiftyFiftyResult();
};

const callAfriend = () => {
  if (!hints.includes("call-a-friend")) return;

  removeHint("call-a-friend");

  const current_question = getCurrentQuestion();

  const correct_answer = current_question.correct_answer;

  const answers = questionAndAnswers.answers();

  let finalAnswer;

  let giveCorrectAnswer;
  const current_difficulty = stagesDifficulty[0];
  switch (current_difficulty) {
    case "easy":
      giveCorrectAnswer = Math.random() < 0.75; // 75%
      break;

    case "medium":
      giveCorrectAnswer = Math.random() < 0.5; // 50%
      break;

    case "hard":
      giveCorrectAnswer = Math.random() < 0.25; // 25%
      break;

    default: // 50%
      giveCorrectAnswer = Math.random() < 0.5;
      break;
  }

  if (current_question.answers.length === 2) {
    answers.forEach((answerBtn) => {
      const btnText = answerBtn?.textContent?.slice(3);

      if (giveCorrectAnswer) {
        if (btnText === correct_answer) {
          const answerOption = answerBtn.firstChild.textContent.slice(0, 1);
          finalAnswer = `I think the answer is ${answerOption}`;
        }
      } else if (btnText) {
        if (btnText !== correct_answer) {
          const answerOption = answerBtn.firstChild.textContent.slice(0, 1);
          finalAnswer = `I think the answer is ${answerOption}`;
        }
      }
    });
  } else {
    if (giveCorrectAnswer) {
      answers.forEach((answerBtn) => {
        const btnText = answerBtn.textContent.slice(3);

        if (btnText === correct_answer) {
          const answerOption = answerBtn.firstChild.textContent.slice(0, 1);
          finalAnswer = `I think the answer is ${answerOption}`;
        }
      });
    } else {
      // There is still a slight chance of getting the correct answer!
      const options = [
        "I think the answer is A",
        "I think the answer is B",
        "I think the answer is C",
        "I think the answer is D",
        "I don't know!",
        "I have no idea!",
      ];

      finalAnswer = options[Math.floor(Math.random() * 6)];
    }
  }

  renderCallAfriendResult(finalAnswer);
};

export { askAudience, fiftyFifty, callAfriend };
