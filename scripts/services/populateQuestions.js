import { questions } from "../variables.js";

const populateQuestions = (data) => {
	const transformed_questions = transformData(data);
	const shuffled_questions_answers = shuffleAnswers(transformed_questions);

	shuffled_questions_answers.forEach((question) => questions.push(question));
};

const transformData = (data) => {
	return data.map((questionObj) => {
		const { question, correct_answer, incorrect_answers } = questionObj;

		return {
			question,
			correct_answer,
			answers: [correct_answer, incorrect_answers[0], incorrect_answers[1], incorrect_answers[2]],
		};
	});
};

const shuffleAnswers = (transformed_questions) => {
	return transformed_questions.map((question) => ({
		...question,
		answers: [...question.answers].sort(() => Math.random() - 0.5),
	}));
};

export default populateQuestions;
