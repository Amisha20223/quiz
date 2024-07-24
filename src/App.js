import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import CareerTest from './components/careertest';
import SkillTest from './components/skilltest';
import { motion } from 'framer-motion';

const questions = [
  {
    question: "Do you prefer to work in a team or alone?",
    answers: [
      { text: "Team", trait: "Social", className: "bg-gray-100 hover:bg-gray-200" },
      { text: "Alone", trait: "Independent", className: "bg-gray-100 hover:bg-gray-200" },
      { text: "Depends on the task", trait: "Flexible", className: "bg-gray-100 hover:bg-gray-200" },
      { text: "No preference", trait: "Neutral", className: "bg-gray-100 hover:bg-gray-200" }
    ]
  },
  {
    question: "How do you handle stress?",
    answers: [
      { text: "Stay calm", trait: "Calm", className: "bg-gray-100 hover:bg-gray-200" },
      { text: "Get anxious", trait: "Anxious", className: "bg-gray-100 hover:bg-gray-200" },
      { text: "Talk to someone", trait: "Social", className: "bg-gray-100 hover:bg-gray-200" },
      { text: "Sleep", trait: "Distracted", className: "bg-gray-100 hover:bg-gray-200" }
    ]
  },
  {
    question: "What's your ideal way to spend a weekend?",
    answers: [
      { text: "Exploring new places", trait: "Adventurous" , className: "bg-gray-100 hover:bg-gray-200"},
      { text: "Relaxing at home", trait: "Relaxed" , className: "bg-gray-100 hover:bg-gray-200"},
      { text: "Engaging in hobbies", trait: "Creative" , className: "bg-gray-100 hover:bg-gray-200"},
      { text: "Spending time with friends and family", trait: "Social" , className: "bg-gray-100 hover:bg-gray-200"}
    ]
  },
  {
    question: "Are you more of a planner or a spontaneous person?",
    answers: [
      { text: "Planner", trait: "Organized", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Spontaneous", trait: "Spontaneous" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "A mix of both", trait: "Balanced" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Depends on the situation", trait: "Flexible" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "Do you enjoy trying new things?",
    answers: [
      { text: "Always", trait: "Adventurous" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Sometimes", trait: "Open", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Rarely", trait: "Cautious" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Never", trait: "Reserved" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How do you usually make decisions?",
    answers: [
      { text: "Rational thinking", trait: "Rational", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Following intuition", trait: "Intuitive" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Seeking advice", trait: "Social", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Weighing pros and cons", trait: "Analytical" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "What's your approach to problem-solving?",
    answers: [
      { text: "Analytical", trait: "Analytical" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Creative", trait: "Creative", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Practical", trait: "Practical" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Intuitive", trait: "Intuitive" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How do you handle conflicts?",
    answers: [
      { text: "Confront directly", trait: "Assertive", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Avoid conflict", trait: "Avoidant", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Seek mediation", trait: "Diplomatic" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Compromise", trait: "Compromising" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "What's more important to you at work?",
    answers: [
      { text: "Achievement", trait: "Ambitious" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Recognition", trait: "Recognition" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Work-life balance", trait: "Balanced" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Learning opportunities", trait: "Curious" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "Do you prefer to take risks or play it safe?",
    answers: [
      { text: "Take risks", trait: "Risk-Taker" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Play it safe", trait: "Cautious" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Depends on the situation", trait: "Flexible" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Moderate risks", trait: "Moderate" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How do you express your emotions?",
    answers: [
      { text: "Openly", trait: "Expressive" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Reservedly", trait: "Reserved", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Through actions", trait: "Action-Oriented" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Depends on the emotion", trait: "Variable" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "What motivates you the most?",
    answers: [
      { text: "Success", trait: "Ambitious" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Helping others", trait: "Altruistic" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Personal growth", trait: "Growth-Oriented", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Rewards", trait: "Reward-Driven" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How do you handle failure?",
    answers: [
      { text: "Learn from it", trait: "Resilient" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Get discouraged", trait: "Sensitive", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Ignore it", trait: "Avoidant" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Try again immediately", trait: "Persistent", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "What's your preferred learning style?",
    answers: [
      { text: "Visual", trait: "Visual" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Auditory", trait: "Auditory" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Kinesthetic", trait: "Kinesthetic", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Reading/Writing", trait: "Reading/Writing", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "Do you prefer structured or flexible environments?",
    answers: [
      { text: "Structured", trait: "Structured" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Flexible", trait: "Flexible" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "A mix of both", trait: "Balanced", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Depends on the context", trait: "Adaptable", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "How do you usually cope with boredom?",
    answers: [
      { text: "Find something new to do", trait: "Adventurous", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Relax and do nothing", trait: "Relaxed", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Engage in a hobby", trait: "Creative" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Socialize", trait: "Social" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "Are you more introverted or extroverted?",
    answers: [
      { text: "Introverted", trait: "Introverted", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Extroverted", trait: "Extroverted" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Ambiverted", trait: "Ambiverted" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Depends on the situation", trait: "Adaptable" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "How do you handle constructive criticism?",
    answers: [
      { text: "Accept and improve", trait: "Resilient" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Feel defensive", trait: "Sensitive", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Ignore it", trait: "Avoidant" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Consider and decide", trait: "Thoughtful" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "What's your approach to setting goals?",
    answers: [
      { text: "Detailed planning", trait: "Organized" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "General ideas", trait: "Flexible" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Step-by-step", trait: "Methodical", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "No specific approach", trait: "Spontaneous", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  
];

const calculatePersonality = (answers) => {
  const traitCounts = answers.reduce((acc, answer) => {
    acc[answer] = (acc[answer] || 0) + 1;
    return acc;
  }, {});

  const predominantTrait = Object.keys(traitCounts).reduce((a, b) => 
    traitCounts[a] > traitCounts[b] ? a : b,
    Object.keys(traitCounts)[0] 
  );

  return predominantTrait;
};
const PersonalityTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (trait) => {
    setUserAnswers([...userAnswers, trait]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
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

  const personalityResult = calculatePersonality(userAnswers);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <video
        src="/personality.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />
      <div className="p-40 relative flex items-center justify-center min-h-screen bg-cyan-600 bg-opacity-70">
        {showResults ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 bg-cyan-300 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold">Your Personality</h2>
            <p className="mt-4">You are predominantly {personalityResult}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-60 flex justify-center items-center bg-cyan-300 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
            <div className="absolute top-0 left-0 w-full h-full mt-4">
              <div className="absolute top-0 left-0">
                {questions[currentQuestion].answers[0] && (
                  <motion.button
                    onClick={() => handleAnswerClick(questions[currentQuestion].answers[0].trait)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${questions[currentQuestion].answers[0].className}`}
                  >
                    {questions[currentQuestion].answers[0].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute top-0 right-0">
                {questions[currentQuestion].answers[1] && (
                  <motion.button
                    onClick={() => handleAnswerClick(questions[currentQuestion].answers[1].trait)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${questions[currentQuestion].answers[1].className}`}
                  >
                    {questions[currentQuestion].answers[1].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute bottom-0 left-0 ">
                {questions[currentQuestion].answers[2] && (
                  <motion.button
                    onClick={() => handleAnswerClick(questions[currentQuestion].answers[2].trait)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${questions[currentQuestion].answers[2].className}`}
                  >
                    {questions[currentQuestion].answers[2].text}
                  </motion.button>
                )}
              </div>
              <div className="absolute bottom-0 right-0">
                {questions[currentQuestion].answers[3] && (
                  <motion.button
                    onClick={() => handleAnswerClick(questions[currentQuestion].answers[3].trait)}
                    variants={floatingOptionsVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`px-4 py-2 m-2 text-black-700 rounded-lg shadow-lg transition ease-in-out delay-150 animate-bounce hover:-translate-y-1 hover:scale-110 duration-300 ${questions[currentQuestion].answers[3].className}`}
                  >
                    {questions[currentQuestion].answers[3].text}
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

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/personality-test" element={<PersonalityTest />} />
          <Route path="/skill-test" element={<SkillTest />} />
          <Route path="/career-test" element={<CareerTest />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
