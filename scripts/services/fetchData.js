import populateQuestions from "./populateQuestions.js";

const BASE_URL = "https://opentdb.com/api.php";

/**
 * Returns an array of objects (questions)
 * @param {string=} [difficulty] - Default: easy. Possible param values: easy, medium, hard.
 */
const fetchQuestions = (difficulty = "easy") => {
	const url = `${BASE_URL}?amount=5&difficulty=${difficulty}&type=multiple`;

	return fetch(url)
		.then((response) => response.json())
		.then((data) => populateQuestions(data.results))
		.catch((error) => {
			throw new Error(error.message);
		});
};

export default fetchQuestions;
