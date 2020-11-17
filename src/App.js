import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Quel programmeur a créé et continue de diriger le développement du noyau de Linux ?',
			answerOptions: [
				{ answerText: 'Steeve Jobs', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Linus Torvalds', isCorrect: true },
				{ answerText: 'Larry Ellison', isCorrect: false },
      ],
      anecdote: 'Linus a découvert l\'informatique vers l\'âge de 11 ans grâce à l\'ordinateur de son grand-père, un Commodore VIC-20.',
		},
		{
			questionText: 'Quel est le principal atout de Linux, développé et maintenu par Linus Torvalds ?',
			answerOptions: [
				{ answerText: 'Il est Finlandais', isCorrect: false },
				{ answerText: 'Il est beau', isCorrect: false },
				{ answerText: 'Il est libre', isCorrect: true },
				{ answerText: 'Il est amusant', isCorrect: false },
      ],
      anecdote: 'Linux est le nom couramment donné à tout système d\'exploitation libre fonctionnant avec le noyau Linux.',
		},
		{
			questionText: 'Quel animal représentant Linux est aussi la mascotte de l\'université d\'Helsinki ?',
			answerOptions: [
				{ answerText: 'Un manchot', isCorrect: true },
				{ answerText: 'Un caribou', isCorrect: false },
				{ answerText: 'Une marmotte', isCorrect: false },
				{ answerText: 'Un gnou', isCorrect: false },
      ],
      anecdote: 'Dessiné en 1996, son usage est libre et se retrouve dans de très nombreux projets et logotypes liés à Linux.',
		},
		{
			questionText: 'Quelle commande Linux, basée sur la commande UNIX, permet d\'effacer un fichier ?',
			answerOptions: [
				{ answerText: 'Del', isCorrect: false },
				{ answerText: 'Rm', isCorrect: true },
				{ answerText: 'Delete', isCorrect: false },
				{ answerText: 'Rem', isCorrect: false },
      ],
      anecdote: 'De par la filiation avec UNIX, la ligne de commande est toujours disponible dans GNU/Linux, quelle que soit la distribution.',
    },
    {
      questionText: 'Laquelle de ces propositions désigne une distribution Linux fondée en 1993 ?',
      answerOptions: [
        { answerText: 'Mandrika', isCorrect: false},
        { answerText: 'Red Hat', isCorrect: true},
        { answerText: 'Souze', isCorrect: false},
        { answerText: 'Zubuntu', isCorrect: true},
      ],
      anecdote: 'Red Hat est l\'une des entreprises dédiées aux logiciels Open Source les plus importantes et les plus reconnues.',
    },
    {
      questionText: 'Quel système d\'exploitation mobile majeur de l\'industrie s\'appuie sur un noyau Linux ?',
      answerOptions: [
        { answerText: 'iOS', isCorrect: false},
        { answerText: 'Android', isCorrect: true},
        { answerText: 'BlackBerry 10', isCorrect: false},
        { answerText: 'Windows Phone', isCorrect: false},
      ],
      anecdote: 'En 2015, Android était le système d\'exploitation le plus utilisé dans le monde avec plus de 80 % de parts de marché.',
    },
    {
      questionText: 'Sous Linux, comment appelle-t-on les logiciels assemblés autour du noyau ?',
      answerOptions: [
        { answerText: 'Un intégré', isCorrect: false},
        { answerText: 'Une logithèque', isCorrect: false},
        { answerText: 'Un progiciel', isCorrect: false},
        { answerText: 'Une distribution', isCorrect: true},
      ],
      anecdote: 'Il existe une très grande variété de distributions, ayant chacune des objectifs et une philosophie particulière.',
    },
    {
      questionText: 'Quel serveur web présent sous Linux est aussi présent sur les serveurs du monde entier ?',
      answerOptions: [
        { answerText: 'Apache', isCorrect: true},
        { answerText: 'Mohican', isCorrect: false},
        { answerText: 'Sioux', isCorrect: false},
        { answerText: 'Comanche', isCorrect: false},
      ],
      anecdote: 'Depuis avril 1996, selon l\'étude permanente de Netcraft, Apache est devenu le serveur HTTP le plus répandu sur Internet.',
    },
    {
      questionText: 'Quel est le nom de la mascotte de Linux, connue des mordus du système d\'exploitation ?',
      answerOptions: [
        { answerText: 'Wilber', isCorrect: false},
        { answerText: 'Puffy', isCorrect: false},
        { answerText: 'Tux', isCorrect: true},
        { answerText: 'Gnu', isCorrect: false},
      ],
      anecdote: 'Le dessin du personnage a été choisi à l\'issue d\'un concours organisé en 1996 remporté par Larry Ewing.',
    },
    {
      questionText: 'Parmi ces commandes Linux, laquelle affiche à l\'écran le contenu d\'un fichier texte ?',
      answerOptions: [
        { answerText: 'Man', isCorrect: false},
        { answerText: 'Type', isCorrect: false},
        { answerText: 'Cat', isCorrect: true},
        { answerText: 'Ls', isCorrect: false},
      ],
      anecdote: 'La différence essentielle de Linux par rapport à d\'autres systèmes d\'exploitation concurrents est d\'être un système d\'exploitation libre.',
    }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [anecdote, setAnecdote] = useState(false);


  

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
      setScore(score + 1);
    }


    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length)  {
      setCurrentQuestion(nextQuestion);
    	} else {
      setShowScore(true);
    }
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
      						<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						
      					<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>					
					<div className='answer-section'>
            			{questions[currentQuestion].answerOptions.map((answerOptions) => (
              				<button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            			))}
					</div>
					{





					}
				</>
			)}
		</div>
	);
}