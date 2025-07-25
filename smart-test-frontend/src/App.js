// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './pages/Test/TestPage';
import ResultPage from './pages/Result/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;




// function App() {
//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white h-screen flex justify-center items-center">
//       <h1 className="text-4xl font-bold">Smart Test Project - Tailwind Working!</h1>
//     </div>
//   );
// }

// export default App;

