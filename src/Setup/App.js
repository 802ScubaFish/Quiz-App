import React, { useState } from 'react';

export default function App() {
    // An array or question, each question is an object that contains both question text as well as an array of answers.
	const questions = [
		{
			questionText: 'What is the Question?',
			answerOptions: [
				{ answerText: 'The answer to life', isCorrect: false },
				{ answerText: 'Thanks for all the fish', isCorrect: false },
				{ answerText: '42', isCorrect: true },
				{ answerText: 'Toast', isCorrect: false },
			],
		},
	];

	return (
		<div className='app'>
            {/* Main ternary to display either the questions section or end score */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>This is where the question text should go</div>
					</div>
					<div className='answer-section'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>
				</>
			)}
		</div>
	);
}

