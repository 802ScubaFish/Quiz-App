import React, { useState } from 'react';

export default function App() {
	// Array of question objects
	const questions = [
		{
			questionText: 'What is the capital of Vermont?',
			answerOptions: [
				{ answerText: 'Burlington', isCorrect: false },
				{ answerText: 'Milton', isCorrect: false },
				{ answerText: 'Montpelier', isCorrect: true },
				{ answerText: 'Essex', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Darth Vader?',
			answerOptions: [
				{ answerText: 'Frank Oz', isCorrect: false },
				{ answerText: 'Anakin Skywalker', isCorrect: true },
				{ answerText: 'Pedro Pascal', isCorrect: false },
				{ answerText: 'Your Father', isCorrect: false },
			],
		},
		{
			questionText: 'Which Vehicle brand uses a 6 star constellation as its logo?',
			answerOptions: [
				{ answerText: 'Subaru', isCorrect: true },
				{ answerText: 'Audi', isCorrect: false },
				{ answerText: 'Tesla', isCorrect: false },
				{ answerText: 'Honda', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	// Track question and start with the first question in the array (0)
	const [currentQuestion, setCurrentQuestion] = useState(0);
	// Track score display state
	const [showScore, setShowScore] = useState(false);
	// Track score points value
	const [score, setScore] = useState(0);

	// Function to increment question each time a button is clicked
	function handleAnswerBttnClick(isCorrect) {
		// If chosen answer is correct or not..
		if(isCorrect === true) {
			setScore(score + 1)
		}
		// If reach the end of questions, then show score display.
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true)
		}
		
	}

	// Function to restart game & reset all state variables
	function restartGameButton() {
		setShowScore(false);
		setScore(0);
		setCurrentQuestion(0);
	}

	return (
		<div className='app'>
			{/* Ternary to render If showScore is true, show the score div below, if false then show the questions section */}
			{showScore ? (
				<>
				<div className='score-section'>You scored {score} out of {questions.length}</div>
				<button onClick={restartGameButton}>Try Again?</button>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					{/* Map over each questions answer options and make each option its own button*/}
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerBttnClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

