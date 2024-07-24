import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillQuestions = [
  {
    question: "What is your proficiency with JavaScript?",
    answers: [
      { text: "Beginner", skill: "JavaScript", level: "Beginner", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Intermediate", skill: "JavaScript", level: "Intermediate", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Advanced", skill: "JavaScript", level: "Advanced", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Expert", skill: "JavaScript", level: "Expert", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "How comfortable are you with React?",
    answers: [
      { text: "Beginner", skill: "React", level: "Beginner" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Intermediate", skill: "React", level: "Intermediate", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Advanced", skill: "React", level: "Advanced" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Expert", skill: "React", level: "Expert", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "Rate your knowledge in CSS.",
    answers: [
      { text: "Beginner", skill: "CSS", level: "Beginner", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Intermediate", skill: "CSS", level: "Intermediate", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Advanced", skill: "CSS", level: "Advanced" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Expert", skill: "CSS", level: "Expert", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "How experienced are you with Node.js?",
    answers: [
      { text: "Beginner", skill: "Node.js", level: "Beginner", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Intermediate", skill: "Node.js", level: "Intermediate", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Advanced", skill: "Node.js", level: "Advanced" },
      { text: "Expert", skill: "Node.js", level: "Expert", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "How would you rate your problem-solving skills?",
    answers: [
      { text: "Beginner", skill: "Problem-solving", level: "Beginner" , className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Intermediate", skill: "Problem-solving", level: "Intermediate", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Advanced", skill: "Problem-solving", level: "Advanced" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Expert", skill: "Problem-solving", level: "Expert" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How proficient are you with database management?",
    answers: [
      { text: "Beginner", skill: "Database Management", level: "Beginner", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Intermediate", skill: "Database Management", level: "Intermediate" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Advanced", skill: "Database Management", level: "Advanced", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Expert", skill: "Database Management", level: "Expert" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "Rate your knowledge in Git.",
    answers: [
      { text: "Beginner", skill: "Git", level: "Beginner" , className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Intermediate", skill: "Git", level: "Intermediate", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Advanced", skill: "Git", level: "Advanced" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Expert", skill: "Git", level: "Expert", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  }
];

const calculateSkillLevel = (answers) => {
  const skillCounts = answers.reduce((acc, answer) => {
    acc[answer.skill] = acc[answer.skill] || {};
    acc[answer.skill][answer.level] = (acc[answer.skill][answer.level] || 0) + 1;
    return acc;
  }, {});

  const predominantSkills = Object.keys(skillCounts).map(skill => {
    const levels = skillCounts[skill];
    const predominantLevel = Object.keys(levels).reduce((a, b) => 
      levels[a] > levels[b] ? a : b,
      Object.keys(levels)[0] 
    );
    return { skill, level: predominantLevel };
  });

  return predominantSkills;
};

const SkillTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < skillQuestions.length) {
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

  const skillResults = calculateSkillLevel(userAnswers);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Video Background */}
      <video
        src="skilltest.mp4"
        autoPlay
        loop
        muted
        className="absolute top-2px left-2px w-full h-full object-cover opacity-60"
      />

       {/* Content */}
       <div className="p-40 relative flex items-center justify-center min-h-screen bg-cyan-600 bg-opacity-70">
        {showResults ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 bg-cyan-300 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold">Your Skill Levels</h2>
            <ul className="mt-4">
              {skillResults.map(result => (
                <li key={result.skill}>
                  {result.skill}: {result.level}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-60 flex justify-center items-center bg-cyan-300 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">{skillQuestions[currentQuestion].question}</h2>
            <div className="absolute top-0 left-0 w-full h-full mt-4">
              <div className="absolute top-0 left-0">
                {skillQuestions[currentQuestion].answers[0] && (
                  <motion.button
                    onClick={() => handleAnswerClick(skillQuestions[currentQuestion].answers[0])}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${skillQuestions[currentQuestion].answers[0].className}`}
                  >
                    {skillQuestions[currentQuestion].answers[0].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute top-0 right-0">
                {skillQuestions[currentQuestion].answers[1] && (
                  <motion.button
                    onClick={() => handleAnswerClick(skillQuestions[currentQuestion].answers[1])}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${skillQuestions[currentQuestion].answers[1].className}`}
                  >
                    {skillQuestions[currentQuestion].answers[1].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute bottom-0 left-0 ">
                {skillQuestions[currentQuestion].answers[2] && (
                  <motion.button
                    onClick={() => handleAnswerClick(skillQuestions[currentQuestion].answers[2])}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${skillQuestions[currentQuestion].answers[2].className}`}
                  >
                    {skillQuestions[currentQuestion].answers[2].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute bottom-0 right-0">
                {skillQuestions[currentQuestion].answers[3] && (
                  <motion.button
                    onClick={() => handleAnswerClick(skillQuestions[currentQuestion].answers[3])}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${skillQuestions[currentQuestion].answers[3].className}`}
                  >
                    {skillQuestions[currentQuestion].answers[3].text}
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

export default SkillTest;
