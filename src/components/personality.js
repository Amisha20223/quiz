
import React, { useState } from 'react';
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
      { text: "Stay calm", trait: "Calm", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Get anxious", trait: "Anxious", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Talk to someone", trait: "Social", className: "bg-gray-100 hover:bg-gray-500" },
      { text: "Sleep", trait: "Distracted", className: "bg-gray-100 hover:bg-gray-500" }
    ]
  },
  {
    question: "What's your ideal way to spend a weekend?",
    answers: [
      { text: "Exploring new places", trait: "Adventurous", className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Relaxing at home", trait: "Relaxed" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Engaging in hobbies", trait: "Creative" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Spending time with friends and family", trait: "Social" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "Are you more of a planner or a spontaneous person?",
    answers: [
      { text: "Planner", trait: "Organized" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Spontaneous", trait: "Spontaneous" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "A mix of both", trait: "Balanced" , className: "bg-gray-100 hover:bg-gray-500"},
      { text: "Depends on the situation", trait: "Flexible" , className: "bg-gray-100 hover:bg-gray-500"}
    ]
  },
  {
    question: "Do you enjoy trying new things?",
    answers: [
      { text: "Always", trait: "Adventurous" },
      { text: "Sometimes", trait: "Open" },
      { text: "Rarely", trait: "Cautious" },
      { text: "Never", trait: "Reserved" }
    ]
  },
  {
    question: "How do you usually make decisions?",
    answers: [
      { text: "Rational thinking", trait: "Rational" },
      { text: "Following intuition", trait: "Intuitive" },
      { text: "Seeking advice", trait: "Social" },
      { text: "Weighing pros and cons", trait: "Analytical" }
    ]
  },
  {
    question: "What's your approach to problem-solving?",
    answers: [
      { text: "Analytical", trait: "Analytical" },
      { text: "Creative", trait: "Creative" },
      { text: "Practical", trait: "Practical" },
      { text: "Intuitive", trait: "Intuitive" }
    ]
  },
  {
    question: "How do you handle conflicts?",
    answers: [
      { text: "Confront directly", trait: "Assertive" },
      { text: "Avoid conflict", trait: "Avoidant" },
      { text: "Seek mediation", trait: "Diplomatic" },
      { text: "Compromise", trait: "Compromising" }
    ]
  },
  {
    question: "What's more important to you at work?",
    answers: [
      { text: "Achievement", trait: "Ambitious" },
      { text: "Recognition", trait: "Recognition" },
      { text: "Work-life balance", trait: "Balanced" },
      { text: "Learning opportunities", trait: "Curious" }
    ]
  },
  {
    question: "Do you prefer to take risks or play it safe?",
    answers: [
      { text: "Take risks", trait: "Risk-Taker" },
      { text: "Play it safe", trait: "Cautious" },
      { text: "Depends on the situation", trait: "Flexible" },
      { text: "Moderate risks", trait: "Moderate" }
    ]
  },
  {
    question: "How do you express your emotions?",
    answers: [
      { text: "Openly", trait: "Expressive" },
      { text: "Reservedly", trait: "Reserved" },
      { text: "Through actions", trait: "Action-Oriented" },
      { text: "Depends on the emotion", trait: "Variable" }
    ]
  },
  {
    question: "What motivates you the most?",
    answers: [
      { text: "Success", trait: "Ambitious" },
      { text: "Helping others", trait: "Altruistic" },
      { text: "Personal growth", trait: "Growth-Oriented" },
      { text: "Rewards", trait: "Reward-Driven" }
    ]
  },
  {
    question: "How do you handle failure?",
    answers: [
      { text: "Learn from it", trait: "Resilient" },
      { text: "Get discouraged", trait: "Sensitive" },
      { text: "Ignore it", trait: "Avoidant" },
      { text: "Try again immediately", trait: "Persistent" }
    ]
  },
  {
    question: "What's your preferred learning style?",
    answers: [
      { text: "Visual", trait: "Visual" },
      { text: "Auditory", trait: "Auditory" },
      { text: "Kinesthetic", trait: "Kinesthetic" },
      { text: "Reading/Writing", trait: "Reading/Writing" }
    ]
  },
  {
    question: "Do you prefer structured or flexible environments?",
    answers: [
      { text: "Structured", trait: "Structured" },
      { text: "Flexible", trait: "Flexible" },
      { text: "A mix of both", trait: "Balanced" },
      { text: "Depends on the context", trait: "Adaptable" }
    ]
  },
  {
    question: "How do you usually cope with boredom?",
    answers: [
      { text: "Find something new to do", trait: "Adventurous" },
      { text: "Relax and do nothing", trait: "Relaxed" },
      { text: "Engage in a hobby", trait: "Creative" },
      { text: "Socialize", trait: "Social" }
    ]
  },
  {
    question: "Are you more introverted or extroverted?",
    answers: [
      { text: "Introverted", trait: "Introverted" },
      { text: "Extroverted", trait: "Extroverted" },
      { text: "Ambiverted", trait: "Ambiverted" },
      { text: "Depends on the situation", trait: "Adaptable" }
    ]
  },
  {
    question: "How do you handle constructive criticism?",
    answers: [
      { text: "Accept and improve", trait: "Resilient" },
      { text: "Feel defensive", trait: "Sensitive" },
      { text: "Ignore it", trait: "Avoidant" },
      { text: "Consider and decide", trait: "Thoughtful" }
    ]
  },
  {
    question: "What's your approach to setting goals?",
    answers: [
      { text: "Detailed planning", trait: "Organized" },
      { text: "General ideas", trait: "Flexible" },
      { text: "Step-by-step", trait: "Methodical" },
      { text: "No specific approach", trait: "Spontaneous" }
    ]
  },
  {
    question: "Do you prefer routine or variety in your daily life?",
    answers: [
      { text: "Routine", trait: "Organized" },
      { text: "Variety", trait: "Adventurous" },
      { text: "A balance of both", trait: "Balanced" },
      { text: "Depends on the day", trait: "Flexible" }
    ]
  }
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

const Quiz = () => {
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
      {/* Video Background */}
      <video
        src="/personality.mp4" 
        autoPlay
        loop
        muted
        className="absolute top-2px left-2px w-full h-full object-cover opacity-60"
      />

       {/* Content */}
       <div className=" p-40 relative flex  items-center justify-center min-h-screen bg-cyan-600 bg-opacity-70">
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

export default Quiz;
