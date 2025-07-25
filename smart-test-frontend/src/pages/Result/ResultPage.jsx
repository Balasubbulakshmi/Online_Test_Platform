import React from 'react';

const ResultPage = () => {
  // Dummy data
  const totalQuestions = 60;
  const correctAnswers = 58;
  const wrongAnswers = totalQuestions - correctAnswers;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8 border border-gray-200">

        {/* Performance Text Block */}
        <h2 className="text-xl font-bold text-green-500 text-center mb-2">Excellent Performance!</h2>
        <p className="text-gray-600 text-center mb-6">
          Good job! You've successfully passed your test.<br />
          Let's ace the others to improve your passing probability!
        </p>

        {/* Total Score Progress Circle */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="#E5E7EB" strokeWidth="15" fill="none" />
              <circle cx="80" cy="80" r="70" stroke="#10B981" strokeWidth="15" fill="none"
                strokeDasharray="439.82"
                strokeDashoffset={439.82 - (439.82 * percentage) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-green-500">{percentage}%</p>
              <p className="text-gray-500 text-sm">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-green-100 rounded-xl p-4 shadow hover:shadow-lg transition">
            <p className="text-xl font-bold text-green-600">{totalQuestions}</p>
            <p className="text-sm text-gray-600 mt-1">Total Questions</p>
          </div>

          <div className="bg-blue-100 rounded-xl p-4 shadow hover:shadow-lg transition">
            <p className="text-xl font-bold text-blue-600">{correctAnswers}</p>
            <p className="text-sm text-gray-600 mt-1">Correct Answers</p>
          </div>

          <div className="bg-red-100 rounded-xl p-4 shadow hover:shadow-lg transition">
            <p className="text-xl font-bold text-red-600">{wrongAnswers}</p>
            <p className="text-sm text-gray-600 mt-1">Wrong Answers</p>
          </div>

          <div className="bg-purple-100 rounded-xl p-4 shadow hover:shadow-lg transition">
            <p className="text-xl font-bold text-purple-600">{percentage}%</p>
            <p className="text-sm text-gray-600 mt-1">Overall Percentage</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
            Back to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResultPage;



// import React from 'react';

// const ResultPage = () => {
//   // Dummy data - Replace with real data from backend
//   const totalQuestions = 50;
//   const correctAnswers = 42;
//   const wrongAnswers = totalQuestions - correctAnswers;
//   const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex justify-center items-center p-4">
//       <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8 border border-gray-200">

//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Test Result</h2>

//         {/* Total Score Progress Circle */}
//         <div className="flex justify-center mb-8">
//           <div className="relative w-40 h-40">
//             <svg className="w-full h-full transform -rotate-90">
//               <circle cx="80" cy="80" r="70" stroke="#E5E7EB" strokeWidth="15" fill="none" />
//               <circle cx="80" cy="80" r="70" stroke="#10B981" strokeWidth="15" fill="none"
//                 strokeDasharray="439.82"
//                 strokeDashoffset={439.82 - (439.82 * percentage) / 100}
//                 strokeLinecap="round"
//               />
//             </svg>
//             <div className="absolute inset-0 flex flex-col justify-center items-center">
//               <p className="text-4xl font-bold text-green-500">{percentage}%</p>
//               <p className="text-gray-500 text-sm">Success Rate</p>
//             </div>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 gap-4 text-center">
//           <div className="bg-green-100 rounded-xl p-4 shadow hover:shadow-lg transition">
//             <p className="text-xl font-bold text-green-600">{totalQuestions}</p>
//             <p className="text-sm text-gray-600 mt-1">Total Questions</p>
//           </div>

//           <div className="bg-blue-100 rounded-xl p-4 shadow hover:shadow-lg transition">
//             <p className="text-xl font-bold text-blue-600">{correctAnswers}</p>
//             <p className="text-sm text-gray-600 mt-1">Correct Answers</p>
//           </div>

//           <div className="bg-red-100 rounded-xl p-4 shadow hover:shadow-lg transition">
//             <p className="text-xl font-bold text-red-600">{wrongAnswers}</p>
//             <p className="text-sm text-gray-600 mt-1">Wrong Answers</p>
//           </div>

//           <div className="bg-purple-100 rounded-xl p-4 shadow hover:shadow-lg transition">
//             <p className="text-xl font-bold text-purple-600">{percentage}%</p>
//             <p className="text-sm text-gray-600 mt-1">Overall Percentage</p>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="mt-8 text-center">
//           <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
//             Back to Dashboard
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ResultPage;









// import React from 'react';

// const ResultPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-6 text-white">
//       <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-xl w-full shadow-xl text-center">
//         <h1 className="text-4xl font-bold mb-4">🎉 Test Completed!</h1>
//         <p className="text-lg mb-8">Thank you for attending the test.</p>

//         <div className="bg-white/20 p-6 rounded-xl mb-6">
//           <p className="text-xl">✅ Correct Answers: <span className="font-bold text-green-300">8</span></p>
//           <p className="text-xl">❌ Wrong Answers: <span className="font-bold text-red-300">2</span></p>
//           <p className="text-xl">⏱️ Time Taken: <span className="font-bold text-yellow-300">5 mins 32 secs</span></p>
//         </div>

//         <button className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-xl text-white text-lg transition">View Detailed Analysis</button>
//       </div>
//     </div>
//   );
// };

// export default ResultPage;
