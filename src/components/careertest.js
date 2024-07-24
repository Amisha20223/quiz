import React, { useState } from 'react';
import { motion } from 'framer-motion';


const careerQuestions = [
  {
    question: "How do you feel about your current job?",
    answers: [
      { text: "Stressed", career: "High-Stress", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Content", career: "Low-Stress", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Overwhelmed", career: "High-Stress", className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Unfulfilled", career: "Low-Stress", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "What type of work environment do you prefer?",
    answers: [
      { text: "Quiet and private", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Busy and dynamic", career: "High-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Collaborative", career: "Moderate-Stress", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Flexible and remote", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How important is work-life balance to you?",
    answers: [
      { text: "Extremely important", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Somewhat important", career: "Moderate-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Not very important", career: "High-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Not important at all", career: "High-Stress" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "What motivates you at work?",
    answers: [
      { text: "Achievement", career: "High-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Recognition", career: "Moderate-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Work-life balance", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Learning opportunities", career: "Moderate-Stress" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How do you cope with work-related stress?",
    answers: [
      { text: "Exercise", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Talk to friends", career: "Moderate-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Take breaks", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Work through it", career: "High-Stress" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "What type of tasks do you enjoy the most?",
    answers: [
      { text: "Creative tasks", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Analytical tasks", career: "Moderate-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Organizational tasks", career: "Moderate-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Problem-solving tasks", career: "High-Stress" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How do you handle deadlines?",
    answers: [
      { text: "Plan ahead", career: "Low-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Work steadily", career: "Moderate-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Procrastinate", career: "High-Stress" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Thrive under pressure", career: "High-Stress", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  }
];

const calculateCareerPath = (answers) => {
  const careerCounts = answers.reduce((acc, answer) => {
    acc[answer] = (acc[answer] || 0) + 1;
    return acc;
  }, {});

  const predominantCareer = Object.keys(careerCounts).reduce((a, b) => 
    careerCounts[a] > careerCounts[b] ? a : b,
    Object.keys(careerCounts)[0] 
  );

  return predominantCareer;
};

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (career) => {
    setUserAnswers([...userAnswers, career]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < careerQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const floatingOptionsVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const careerResult = calculateCareerPath(userAnswers);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
     
      <video
        src="/career.mp4" 
        autoPlay
        loop
        muted
        className="absolute top-2px left-2px w-full h-full object-cover opacity-60"
      />

       <div className="p-40 relative flex items-center justify-center min-h-screen bg-cyan-600 bg-opacity-70">
        {showResults ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 bg-cyan-300 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold">Your Ideal Career Path</h2>
            <p className="mt-4">Your ideal career path is {careerResult}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-60 flex justify-center items-center bg-cyan-300 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">{careerQuestions[currentQuestion].question}</h2>
            <div className="absolute top-0 left-0 w-full h-full mt-4">
              <div className="absolute top-0 left-0">
                {careerQuestions[currentQuestion].answers[0] && (
                  <motion.button
                    onClick={() => handleAnswerClick(careerQuestions[currentQuestion].answers[0].career)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${careerQuestions[currentQuestion].answers[0].className}`}
                  >
                    {careerQuestions[currentQuestion].answers[0].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute top-0 right-0">
                {careerQuestions[currentQuestion].answers[1] && (
                  <motion.button
                    onClick={() => handleAnswerClick(careerQuestions[currentQuestion].answers[1].career)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${careerQuestions[currentQuestion].answers[1].className}`}
                  >
                    {careerQuestions[currentQuestion].answers[1].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute bottom-0 left-0 ">
                {careerQuestions[currentQuestion].answers[2] && (
                  <motion.button
                    onClick={() => handleAnswerClick(careerQuestions[currentQuestion].answers[2].career)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${careerQuestions[currentQuestion].answers[2].className}`}
                  >
                    {careerQuestions[currentQuestion].answers[2].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute bottom-0 right-0">
                {careerQuestions[currentQuestion].answers[3] && (
                  <motion.button
                    onClick={() => handleAnswerClick(careerQuestions[currentQuestion].answers[3].career)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${careerQuestions[currentQuestion].answers[3].className}`}
                  >
                    {careerQuestions[currentQuestion].answers[3].text}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CareerTest;
