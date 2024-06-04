import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Cubscoutquiz = () => {
    // State variables
    const [isLoading, setIsLoading] = useState(false); // State variable to track loading state
    const [quiz, setQuiz] = useState([]); // State variable to store quiz questions
    const [answers, setAnswers] = useState([]); // State variable to store user's answers
    const [feedbacks, setFeedbacks] = useState([]); // State variable to store feedback for each question
    const [showScore, setShowScore] = useState(false); // State variable to track if score should be shown
    const [score, setScore] = useState(0); // State variable to store user's score

    // Generate quiz independently of user's age
    useEffect(() => {
        // Define the quiz questions and answers
        let newQuiz = [["How many Boy Scout ranks are there?", "7"], ["What kind of wood is used to start a fire?", "Tinder"], ["How many fingers is the Scout sign?", "Three"], ["How many fingers is the Scout salute?", "Two"], ["What is the Scout motto?", "Be Prepared"], ["What is the Scout slogan?", "Do a Good Turn Daily"]];
        
        // Initialize state variables with default values
        setQuiz(newQuiz);
        setAnswers(Array(newQuiz.length).fill(''));
        setFeedbacks(Array(newQuiz.length).fill(''));
        setShowScore(false);
        setScore(0);
    }, []);

    // Handle input change for each quiz question
    const handleInputChange = (index, event) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    // Handle quiz submission
    const handleSubmit = () => {
        let newScore = 0;
        const newFeedbacks = quiz.map((question, index) => {
            if (answers[index].trim().toLowerCase() === question[1].toLowerCase()) {
                newScore++;
                return `Well done! The correct answer is ${question[1]}.`;
            } else {
                return `Incorrect! The correct answer is ${question[1]}.`;
            }
        });
        setFeedbacks(newFeedbacks);
        setShowScore(true);
        setScore(newScore);
    };

    // Render loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Render quiz component
    return (
        <>
            <header className="">
                <Nav />
            </header>
            <main>
                <Hero title="cub scout quiz" herocubscoutquizoverlay="hero-cubscoutquizoverlay" />
                {quiz.map((question, index) => (
                    <div className="cubscout-quiz" key={index}>
                        <label className="quizlabel" htmlFor={`p2userq${index}`}>{question[0]}</label>
                        <input className="quizinput" type="text" id={`p2userq${index}`} value={answers[index]} onChange={(e) => handleInputChange(index, e)} />
                        {showScore ? (
                            <label htmlFor={`p2q${index}feedback`}>Answer: {feedbacks[index]}</label>
                        ) : null}
                        <br />
                    </div>
                ))}
                <div className="quiz-buttons">
                    <button className="btn submit-button" onClick={handleSubmit}>Submit Answers</button>
                    {showScore && <label htmlFor="finalscore" id="finalscore">Your final score is {score}/{quiz.length}.</label>}
                    <Link className="btn home-link" to="/dashboard">Dashboard</Link>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Cubscoutquiz;
