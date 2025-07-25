// File: D:\SmartTestProject\smart-test-frontend\src\pages\Test\TestPage.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const TestPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/questions/")
      .then(response => setQuestions(response.data))
      .catch(error => console.error("Error fetching questions:", error));
  }, []);

  const handleOptionChange = (questionId, selectedOption) => {
    if (!submitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: selectedOption
      });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getOptionClass = (question, option) => {
    const selected = selectedAnswers[question.id];
    if (!submitted) return "bg-white";

    if (option === question.correct_answer) {
      return "bg-green-200";
    }
    if (option === selected && option !== question.correct_answer) {
      return "bg-red-200";
    }

    return "bg-white";
  };

  return (
    <div className="min-h-screen py-10 px-4" style={{
      background: "linear-gradient(to right, #e0c3fc, #8ec5fc)"  // Gradient light purple
    }}>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">Smart Test Platform</h1>
        
        {questions.map((question, index) => (
          <div key={question.id} className="mb-8 p-6 border border-purple-300 rounded-xl shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{index + 1}. {question.text}</h2>
            <p className="text-sm text-gray-600 mb-4">
              Subject: {question.subject} | Difficulty: {question.difficulty}
            </p>

            <div className="space-y-2">
              {question.options.map((option, i) => (
                <label
                  key={i}
                  className={`block p-3 rounded-md cursor-pointer border ${getOptionClass(question, option)}`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedAnswers[question.id] === option}
                    onChange={() => handleOptionChange(question.id, option)}
                    className="mr-2"
                    disabled={submitted}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition block mx-auto mt-6"
          >
            Submit
          </button>
        ) : (
          <p className="text-center text-green-600 text-lg font-semibold mt-6">
            Answers submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default TestPage;








// ## FINAL ONE ALL ARE CORRECT FINAL

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/questions/")
//       .then((response) => {
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching questions:", error);
//       });
//   }, []);

//   const handleOptionChange = (questionId, selectedOption) => {
//     setAnswers({ ...answers, [questionId]: selectedOption });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let correct = 0;
//     let wrong = 0;

//     questions.forEach((question) => {
//       const userAnswer = answers[question.id];
//       if (userAnswer === question.options.find((opt) => opt.is_correct)?.text) {
//         correct++;
//       } else {
//         wrong++;
//       }
//     });

//     setResult({ correct, wrong });
//   };

//   return (
//     <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-purple-100 via-violet-200 to-pink-100">
//       <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📝 Online Test</h2>

//         {questions.length === 0 ? (
//           <p className="text-red-500 text-center">No questions found.</p>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-8">
//             {questions.map((question) => (
//               <div
//                 key={question.id}
//                 className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   {question.question_text}
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {question.options.map((option, index) => {
//                     const isSelected = answers[question.id] === option.text;
//                     const isCorrect = option.is_correct;
//                     const showFeedback = result !== null;

//                     let optionClass = "bg-white border-gray-300 hover:bg-blue-50";
//                     if (showFeedback && isSelected && isCorrect) {
//                       optionClass = "bg-green-100 border-green-500";
//                     } else if (showFeedback && isSelected && !isCorrect) {
//                       optionClass = "bg-red-100 border-red-500";
//                     }

//                     return (
//                       <label
//                         key={option.id}
//                         className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${optionClass}`}
//                       >
//                         <input
//                           type="radio"
//                           name={`question-${question.id}`}
//                           value={option.text}
//                           checked={answers[question.id] === option.text}
//                           onChange={() => handleOptionChange(question.id, option.text)}
//                           className="mr-2"
//                         />
//                         {option.text}
//                       </label>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}

//             <div className="text-center mt-8">
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}

//         {result && (
//           <div className="mt-10 text-center bg-gray-50 p-4 rounded-lg shadow-inner">
//             <p className="text-green-600 text-lg font-semibold mb-2">
//               ✅ Correct Answers: {result.correct}
//             </p>
//             <p className="text-red-600 text-lg font-semibold">
//               ❌ Wrong Answers: {result.wrong}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestPage;





// #GUI(4) BUT THE OPTIONS DOES NOT SHOW

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/questions/")
//       .then((response) => {
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching questions:", error);
//       });
//   }, []);

//   const handleOptionChange = (questionId, selectedOption) => {
//     setAnswers({ ...answers, [questionId]: selectedOption });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let correct = 0;
//     let wrong = 0;

//     questions.forEach((question) => {
//       const userAnswer = answers[question.id];
//       if (userAnswer === question.correct_answer) {
//         correct++;
//       } else {
//         wrong++;
//       }
//     });

//     setResult({ correct, wrong });
//   };

//   return (
//     <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
//       <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📝 Online Test</h2>

//         {questions.length === 0 ? (
//           <p className="text-red-500 text-center">No questions found.</p>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-8">
//             {questions.map((question) => (
//               <div
//                 key={question.id}
//                 className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   {question.question_text}
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {[question.option1, question.option2, question.option3, question.option4].map(
//                     (option, index) => {
//                       const isSelected = answers[question.id] === option;
//                       const isCorrect = option === question.correct_answer;
//                       const isWrong = isSelected && !isCorrect;

//                       return (
//                         <label
//                           key={index}
//                           className={`cursor-pointer p-4 rounded-lg border transition-all duration-300
//                           ${
//                             isSelected
//                               ? isCorrect
//                                 ? "bg-green-100 border-green-500"
//                                 : "bg-red-100 border-red-500"
//                               : "bg-white border-gray-300 hover:bg-blue-50"
//                           }`}
//                         >
//                           <input
//                             type="radio"
//                             name={`question-${question.id}`}
//                             value={option}
//                             checked={answers[question.id] === option}
//                             onChange={() => handleOptionChange(question.id, option)}
//                             className="mr-2"
//                           />
//                           {option}
//                         </label>
//                       );
//                     }
//                   )}
//                 </div>
//               </div>
//             ))}

//             <div className="text-center mt-8">
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}

//         {result && (
//           <div className="mt-10 text-center">
//             <p className="text-green-600 text-lg font-semibold">
//               ✅ Correct Answers: {result.correct}
//             </p>
//             <p className="text-red-600 text-lg font-semibold">
//               ❌ Wrong Answers: {result.wrong}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestPage;





// //CORRECTLY WORK QUES & OPTIONS ALSO

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/questions/")
//       .then((response) => {
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching questions:", error);
//       });
//   }, []);

//   const handleOptionSelect = (questionId, optionId) => {
//     if (!submitted) {
//       setSelectedOptions((prev) => ({
//         ...prev,
//         [questionId]: optionId,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const getOptionClasses = (question, option) => {
//     if (!submitted) {
//       return "border rounded-lg p-3 w-full text-left hover:bg-gray-100";
//     }

//     const selectedId = selectedOptions[question.id];
//     const isSelected = selectedId === option.id;

//     if (isSelected && option.is_correct) {
//       return "bg-green-100 border border-green-400 rounded-lg p-3 w-full";
//     } else if (isSelected && !option.is_correct) {
//       return "bg-red-100 border border-red-400 rounded-lg p-3 w-full";
//     } else if (option.is_correct) {
//       return "bg-green-100 border border-green-400 rounded-lg p-3 w-full";
//     }

//     return "border rounded-lg p-3 w-full";
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Online Test</h2>
//         <form onSubmit={handleSubmit}>
//           {questions.map((question, index) => (
//             <div key={question.id} className="mb-8">
//               <h4 className="text-lg font-semibold mb-2">
//                 Q{index + 1}. {question.question_text}
//               </h4>
//               <div className="grid grid-cols-2 gap-4">
//                 {question.options.map((option) => (
//                   <label
//                     key={option.id}
//                     className={getOptionClasses(question, option)}
//                   >
//                     <input
//                       type="radio"
//                       name={`question-${question.id}`}
//                       value={option.id}
//                       onChange={() => handleOptionSelect(question.id, option.id)}
//                       className="mr-2"
//                       disabled={submitted}
//                     />
//                     {option.text}
//                   </label>
//                 ))}
//               </div>
//               <hr className="mt-4" />
//             </div>
//           ))}

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition duration-200"
//               disabled={submitted}
//             >
//               Submit Answers
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TestPage;





// #GUI(4) BUT NOT SHOW THE QUESTION ONLY SHOW OPTIONS

// import React, { useEffect, useState } from 'react';

// function TestPage() {
//   const [questions, setQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/questions/');
//       const data = await response.json();
//       setQuestions(data);
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//     }
//   };

//   const handleOptionSelect = (questionId, optionId) => {
//     setSelectedAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: optionId,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Selected Answers:', selectedAnswers);
//     // You can send selectedAnswers to backend if needed
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-6">Online Test</h1>

//         <form onSubmit={handleSubmit}>
//           {questions.length === 0 ? (
//             <p className="text-center text-gray-600">No questions available.</p>
//           ) : (
//             questions.map((question, qIndex) => (
//               <div key={question.id} className="mb-6 border-b pb-4">
//                 <h2 className="text-xl font-semibold mb-3">
//                   Q{qIndex + 1}. {question.text}
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {question.options && question.options.map((option) => (
//                     <label
//                       key={option.id}
//                       className={`border rounded-xl p-3 cursor-pointer hover:shadow-md transition ${
//                         selectedAnswers[question.id] === option.id
//                           ? 'border-blue-600 bg-blue-50'
//                           : 'border-gray-300'
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name={`question_${question.id}`}
//                         value={option.id}
//                         onChange={() => handleOptionSelect(question.id, option.id)}
//                         className="mr-2"
//                       />
//                       {option.text}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             ))
//           )}

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
//             >
//               Submit Answers
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default TestPage;






// #GUI(3)

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function TestPage() {
//   const [questions, setQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/questions/')
//       .then(response => {
//         setQuestions(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching questions:', error);
//       });
//   }, []);

//   const handleOptionChange = (questionId, optionId) => {
//     if (!submitted) {
//       setSelectedAnswers(prev => ({
//         ...prev,
//         [questionId]: optionId
//       }));
//     }
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   const getOptionStyle = (questionId, option) => {
//     const selected = selectedAnswers[questionId];
//     if (!submitted || selected == null) return 'bg-white hover:bg-blue-100';
//     if (selected === option.id) {
//       return option.is_correct ? 'bg-green-200' : 'bg-red-200';
//     }
//     return 'bg-white';
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">📝 Online Test</h1>
//       {questions.length === 0 ? (
//         <p className="text-center text-gray-600">Loading questions...</p>
//       ) : (<form>
//           {questions.map((question, index) => (
//             <div key={question.id} className="mb-6 p-4 bg-white rounded-2xl shadow-md border">
//               <h2 className="text-lg font-semibold mb-3">{index + 1}. {question.text}</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {question.options.map(option => (
//                   <label
//                     key={option.id}
//                     className={`p-3 rounded-xl border cursor-pointer transition-colors duration-200 ${getOptionStyle(question.id, option)}`}
//                   >
//                     <input
//                       type="radio"
//                       name={`question-${question.id}`}
//                       value={option.id}
//                       checked={selectedAnswers[question.id] === option.id}
//                       onChange={() => handleOptionChange(question.id, option.id)}
//                       className="mr-2"
//                     />
//                     {option.text}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))}
//           {!submitted && (
//             <div className="text-center mt-8">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
//               >
//                 Submit Test
//               </button>
//             </div>
//           )}
//         </form>
//       )}
//     </div>
//   );
// }

// export default TestPage;






// #GUI(2)

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/questions/")
//       .then((response) => {
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching questions:", error);
//       });
//   }, []);

//   const handleOptionChange = (questionId, optionId) => {
//     setAnswers({ ...answers, [questionId]: optionId });
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white py-10 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           📝 Smart Test - Mock Exam
//         </h1>

//         {questions.length === 0 ? (
//           <p className="text-center text-gray-500">
//             {submitted ? "No questions found." : "Loading questions..."}
//           </p>
//         ) : (
//           questions.map((question, index) => (
//             <div key={question.id} className="mb-8">
//               <h2 className="text-lg font-semibold mb-2">
//                 Question {index + 1}
//               </h2>
//               <p className="mb-4 text-gray-700">{question.question_text}</p>
//               <div className="space-y-3">
//                 {question.options.map((option) => {
//                   const isSelected = answers[question.id] === option.id;
//                   const isCorrect = submitted && option.is_correct;
//                   const isWrong =
//                     submitted && isSelected && !option.is_correct;

//                   let optionClass =
//                     "w-full p-3 rounded-lg border cursor-pointer transition-all";

//                   if (isCorrect) {
//                     optionClass +=
//                       " bg-green-100 border-green-400 text-green-900";
//                   } else if (isWrong) {
//                     optionClass += " bg-red-100 border-red-400 text-red-900";
//                   } else {
//                     optionClass +=
//                       " bg-white hover:bg-gray-100 border-gray-300";
//                   }

//                   return (
//                     <label key={option.id} className={optionClass}>
//                       <div className="flex items-center space-x-3">
//                         <input
//                           type="radio"
//                           name={`question_${question.id}`}
//                           value={option.id}
//                           checked={isSelected}
//                           onChange={() =>
//                             handleOptionChange(question.id, option.id)
//                           }
//                           disabled={submitted}
//                           className="accent-purple-500"
//                         />
//                         <span>{option.text}</span>
//                         {submitted && isCorrect && (
//                           <span className="ml-auto text-green-600 font-bold">
//                             ✔
//                           </span>
//                         )}
//                         {submitted && isWrong && (
//                           <span className="ml-auto text-red-600 font-bold">
//                             ✘
//                           </span>
//                         )}
//                       </div>
//                     </label>
//                   );
//                 })}
//               </div>
//             </div>
//           ))
//         )}

//         {questions.length > 0 && !submitted && (
//           <div className="text-center">
//             <button
//               onClick={handleSubmit}
//               className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {submitted && (
//           <div className="mt-8 text-center text-green-600 font-medium">
//             ✅ Test submitted! Review your answers above.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestPage;





// #GUI (1)

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/questions/")
//       .then((response) => {
//         console.log("Fetched questions:", response.data);
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching questions:", error);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-white to-pink-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
//           📝 Online Test
//         </h2>

//         {questions.length === 0 ? (
//           <p className="text-center text-red-500 font-medium">
//             No questions found. Please try again later.
//           </p>
//         ) : (
//           questions.map((question, index) => (
//             <div
//               key={question.id}
//               className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-6 shadow-sm transition duration-300 hover:shadow-md"
//             >
//               <h4 className="text-lg font-semibold text-gray-800 mb-4">
//                 {index + 1}. {question.question_text}
//               </h4>
//               <ul className="space-y-2 pl-4 list-disc text-gray-700">
//                 {question.options.map((option) => (
//                   <li key={option.id} className="hover:text-indigo-600">
//                     {option.text}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         )}

//         <button
//           className="block w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestPage;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function TestPage() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/questions/')
//       .then(response => {
//         setQuestions(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching questions:', error);
//         setError('Failed to load questions. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-violet-200 py-10 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">📝 Online Test</h1>

//         {loading && (
//           <div className="text-center text-gray-700 font-semibold text-lg">
//             Loading questions...
//           </div>
//         )}

//         {error && (
//           <div className="text-center text-red-500 font-semibold text-lg">
//             {error}
//           </div>
//         )}

//         {!loading && questions.length === 0 && (
//           <div className="text-center text-gray-500">No questions found.</div>
//         )}

//         <div className="space-y-6">
//           {questions.map((question, index) => (
//             <div key={index} className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                 Q{index + 1}: {question.text}
//               </h2>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {question.options.map((option, idx) => (
//                   <li key={idx}>
//                     <label className="flex items-center space-x-3 cursor-pointer">
//                       <input type="radio" name={`question-${index}`} className="form-radio h-5 w-5 text-indigo-600" />
//                       <span className="text-gray-700">{option}</span>
//                     </label>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TestPage;



// #THIS IS ALSO CRT FETCH FROM DB(ENHANCE )

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/questions/")
//       .then((response) => {
//         console.log("Fetched questions:", response.data);
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching questions:", error);
//       });
//   }, []);

//   return (
//     <div style={{ maxWidth: "700px", margin: "auto" }}>
//       <h2 style={{ textAlign: "center", fontWeight: "bold", margin: "20px 0" }}>
//         Online Test
//       </h2>

//       {questions.map((question, index) => (
//         <div
//           key={question.id}
//           style={{
//             backgroundColor: "#fff",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 0 8px rgba(0,0,0,0.1)",
//             marginBottom: "20px",
//           }}
//         >
//           <h4>{index + 1}. {question.question_text}</h4>
//           <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
//             {question.options.map((option) => (
//               <li key={option.id}>{option.text}</li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <button
//         style={{
//           display: "block",
//           margin: "auto",
//           padding: "10px 20px",
//           borderRadius: "5px",
//           backgroundColor: "#2563eb",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default TestPage;











// #THIS ONE PART OF IT 


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/questions/');
//         setQuestions(response.data);
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleOptionChange = (questionId, selectedOptionLabel) => {
//     setAnswers({
//       ...answers,
//       [questionId]: selectedOptionLabel,
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Submitted answers:', answers);
//     // Optionally: send to backend here
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Online Test</h1>
//       <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
//         {questions.map((question, index) => (
//           <div key={question.id} className="mb-8 p-4 border rounded-lg shadow-sm bg-white">
//             <h2 className="text-xl font-semibold mb-3">
//               Q{index + 1}. {question.question_text}
//             </h2>
//             <div className="space-y-2">
//               {question.options.map((option) => (
//                 <label key={option.label} className="flex items-center space-x-3">
//                   <input
//                     type="radio"
//                     name={`question-${question.id}`}
//                     value={option.label}
//                     checked={answers[question.id] === option.label}
//                     onChange={() => handleOptionChange(question.id, option.label)}
//                     className="form-radio text-blue-500"
//                   />
//                   <span>{option.label}. {option.option_text}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TestPage;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TestPage() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch questions from backend
//     axios.get("http://127.0.0.1:8000/api/questions/")
//       .then((res) => {
//         if (res.data && res.data.length > 0) {
//           setQuestions(res.data);
//         } else {
//           setError("No questions found.");
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setError("Failed to fetch questions.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p className="text-center text-blue-600">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-600">{error}</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">Test Page</h1>
//       <div className="space-y-4">
//         {questions.map((q, index) => (
//           <div key={q.id} className="border p-4 rounded shadow">
//             <p className="font-semibold">Q{index + 1}: {q.question_text}</p>
//             <ul className="mt-2 list-disc list-inside">
//               <li>A. {q.option_a}</li>
//               <li>B. {q.option_b}</li>
//               <li>C. {q.option_c}</li>
//               <li>D. {q.option_d}</li>
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TestPage;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CheckCircle, XCircle } from 'lucide-react';

// const TestPage = () => {
//   const [questionData, setQuestionData] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch question from API

//   useEffect(() => {
//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/questions/");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setQuestions(data);
//     } catch (error) {
//       console.error("Failed to fetch question:", error);
//     }
//   };

//   fetchQuestions();
//   }, []);

 
//   const handleSelect = (index) => {
//     if (!showResult) {
//       setSelectedOption(index);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedOption !== null) {
//       setShowResult(true);
//     }
//   };

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
//   if (!questionData) return <div className="p-6 text-center">No questions found.</div>;

//   const { question_text, options, correct_option } = questionData;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8 border border-gray-200">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">Smart Test - Mock Exam</h2>
//             <p className="text-sm text-gray-500">Session 1</p>
//           </div>
//           <div className="text-purple-500 font-medium text-sm">⏱️ 00:00 Min</div>
//         </div>

//         {/* Question */}
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Question 1</h3>
//         <p className="text-gray-700 mb-8">{question_text}</p>

//         {/* Options */}
//         <div className="space-y-4">
//           {options.map((option, index) => {
//             const isCorrect = index === correct_option;
//             const isSelected = index === selectedOption;

//             let optionStyle = "bg-gray-50 border-2 border-gray-300 hover:bg-purple-50";
//             if (showResult) {
//               if (isCorrect) {
//                 optionStyle = "bg-green-100 border-green-500 text-green-700";
//               } else if (isSelected && !isCorrect) {
//                 optionStyle = "bg-red-100 border-red-500 text-red-700";
//               }
//             } else if (isSelected) {
//               optionStyle = "bg-purple-100 border-purple-500 text-purple-700 shadow-md";
//             }

//             return (
//               <div
//                 key={index}
//                 className={`p-4 rounded-xl cursor-pointer flex items-center justify-between transition-all duration-300 ${optionStyle}`}
//                 onClick={() => handleSelect(index)}
//               >
//                 <span>{option}</span>
//                 {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
//                 {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
//               </div>
//             );
//           })}
//         </div>

//         {/* Submit Button */}
//         <div className="mt-8 flex justify-end">
//           {!showResult ? (
//             <button
//               onClick={handleSubmit}
//               className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg"
//             >
//               Submit Answer
//             </button>
//           ) : (
//             <button
//               onClick={() => window.location.reload()}
//               className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition"
//             >
//               Next Question
//             </button>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestPage;









// import React, { useState } from 'react';
// import { CheckCircle, XCircle } from 'lucide-react';

// const TestPage = () => {
//   const question = "Which of the following scenarios is likely to cause the value of a country's currency to rise?";

//   const options = [
//     "Sudden change in government",
//     "Increased demand for the nation's products and currency",
//     "Higher interest rates",
//     "Political instability"
//   ];

//   const correctAnswer = 1;

//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showResult, setShowResult] = useState(false);

//   const handleSelect = (index) => {
//     if (!showResult) {
//       setSelectedOption(index);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedOption !== null) {
//       setShowResult(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8 border border-gray-200">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">Smart Test - Mock Exam</h2>
//             <p className="text-sm text-gray-500">Session 1</p>
//           </div>
//           <div className="text-purple-500 font-medium text-sm">⏱️ 00:00 Min</div>
//         </div>

//         {/* Question */}
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Question 1</h3>
//         <p className="text-gray-700 mb-8">{question}</p>

//         {/* Options */}
//         <div className="space-y-4">
//           {options.map((option, index) => {
//             const isCorrect = index === correctAnswer;
//             const isSelected = index === selectedOption;

//             let optionStyle = "bg-gray-50 border-2 border-gray-300 hover:bg-purple-50";
//             if (showResult) {
//               if (isCorrect) {
//                 optionStyle = "bg-green-100 border-green-500 text-green-700";
//               } else if (isSelected && !isCorrect) {
//                 optionStyle = "bg-red-100 border-red-500 text-red-700";
//               }
//             } else if (isSelected) {
//               optionStyle = "bg-purple-100 border-purple-500 text-purple-700 shadow-md";
//             }

//             return (
//               <div
//                 key={index}
//                 className={`p-4 rounded-xl cursor-pointer flex items-center justify-between transition-all duration-300 ${optionStyle}`}
//                 onClick={() => handleSelect(index)}
//               >
//                 <span>{option}</span>
//                 {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
//                 {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
//               </div>
//             );
//           })}
//         </div>

//         {/* Submit Button */}
//         <div className="mt-8 flex justify-end">
//           {!showResult ? (
//             <button
//               onClick={handleSubmit}
//               className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg"
//             >
//               Submit Answer
//             </button>
//           ) : (
//             <button
//               onClick={() => window.location.reload()}
//               className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition"
//             >
//               Next Question
//             </button>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestPage;







// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

// const sampleQuestion = {
//   text: "The Indian Contract Act 1872 came into force on ______?",
//   options: ["January 1, 1872", "March 1, 1872", "July 1, 1872", "September 1, 1872"]
// };

// const TestPage = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [progress, setProgress] = useState(20);

//   const handleOptionSelect = (index) => {
//     setSelectedOption(index);
//   };

//   const handleNext = () => {
//     // Next question logic here
//     setProgress((prev) => (prev < 100 ? prev + 20 : 100));
//     setSelectedOption(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-6">

//       <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-3xl">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-white text-lg font-semibold">MCT Mock Test</h2>
//             <p className="text-gray-200 text-sm">Session 1</p>
//           </div>
//           <div className="flex items-center text-white">
//             <Clock className="w-5 h-5 mr-2 text-yellow-300" />
//             <span>00:00 Min</span>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <motion.div 
//           className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mb-6"
//           initial={{ width: 0 }}
//           animate={{ width: `${progress}%` }}
//         />

//         {/* Question */}
//         <div className="mb-6">
//           <h3 className="text-white text-lg font-bold mb-3">Question 1</h3>
//           <p className="text-white text-md">{sampleQuestion.text}</p>
//         </div>

//         {/* Options */}
//         <div className="space-y-4 mb-8">
//           {sampleQuestion.options.map((option, index) => (
//             <div 
//               key={index}
//               onClick={() => handleOptionSelect(index)}
//               className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
//                 selectedOption === index 
//                   ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-lg scale-105' 
//                   : 'bg-white bg-opacity-20 text-white hover:bg-gradient-to-r from-purple-400 to-indigo-400 hover:text-white'
//               }`}
//             >
//               {option}
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-between items-center">
//           <button className="flex items-center text-white hover:scale-105 transition">
//             <ArrowLeft className="mr-2" /> Previous
//           </button>

//           <div className="flex space-x-4">
//             <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:scale-105 transition">
//               Mark as Review
//             </button>

//             <button 
//               onClick={handleNext}
//               className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-xl hover:scale-105 transition shadow-lg"
//             >
//               <ArrowRight className="inline mr-1" /> Next
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestPage;






// import React, { useState } from 'react';

// const TestPage = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     'Option A',
//     'Option B',
//     'Option C',
//     'Option D'
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-purple-500 to-indigo-500 flex justify-center items-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 relative">
        
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-lg text-gray-600">MCT Mock Tests</h2>
//             <p className="text-sm text-gray-400">Session 1</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm">Review</button>
//             <span className="text-sm text-gray-500"><i className="fa-regular fa-clock"></i> 00:00 Min</span>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
//           <div className="bg-indigo-500 h-2 rounded-full w-1/5"></div>
//         </div>

//         {/* Question */}
//         <h3 className="text-lg font-semibold mb-4 text-gray-700">
//           Question 1
//         </h3>
//         <p className="text-gray-600 mb-6">
//           The Indian Contract Act 1872 came into force on..... The Indian Contract Act 1872 came into force on.....
//         </p>

//         {/* Options */}
//         <div className="space-y-4">
//           {options.map((option, index) => (
//             <div 
//               key={index} 
//               onClick={() => setSelectedOption(index)}
//               className={`flex items-center p-3 rounded-xl border transition cursor-pointer
//                 ${selectedOption === index ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'bg-gray-50 hover:bg-gray-100'}
//               `}
//             >
//               <input 
//                 type="radio" 
//                 checked={selectedOption === index} 
//                 onChange={() => setSelectedOption(index)}
//                 className="mr-3 accent-purple-600"
//               />
//               <label>{option}</label>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between items-center mt-8">
//           <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full">Previous</button>
//           <div className="flex gap-4">
//             <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full">Next</button>
//             <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full">Finish</button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestPage;







// // import React from 'react';

// // const TestPage = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 p-6 flex flex-col items-center justify-center text-white">
// //       <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-3xl">
// //         <h1 className="text-3xl font-bold text-center mb-6">📝 Smart Test</h1>

// //         <div className="space-y-6">
// //           <div className="bg-white/20 p-4 rounded-xl shadow-md hover:scale-[1.02] transition transform duration-300">
// //             <p className="text-lg font-medium">Q1: What is the capital of France?</p>
// //             <div className="mt-3 space-y-2">
// //               <button className="w-full bg-white/30 hover:bg-white/40 text-white py-2 rounded-xl">A) Paris</button>
// //               <button className="w-full bg-white/30 hover:bg-white/40 text-white py-2 rounded-xl">B) Berlin</button>
// //               <button className="w-full bg-white/30 hover:bg-white/40 text-white py-2 rounded-xl">C) Madrid</button>
// //               <button className="w-full bg-white/30 hover:bg-white/40 text-white py-2 rounded-xl">D) Rome</button>
// //             </div>
// //           </div>

// //           <div className="flex justify-between items-center mt-8">
// //             <button className="bg-pink-500 px-6 py-2 rounded-xl hover:bg-pink-600 transition">Previous</button>
// //             <button className="bg-green-500 px-6 py-2 rounded-xl hover:bg-green-600 transition">Next</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TestPage;
