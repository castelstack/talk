import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import DarkButton from "./components/darkMode/DarkButton";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import TalkPage from "./pages/talkPage";

function App() {
  return (
    <Router>
    <div
      className='transition duration-500  
                     bg-white dark:bg-dark-900 '
    >
      <div className='bg-gray-200 dark:bg-dark-900 w-full'>
        <DarkButton />
      </div>

      <Routes>
        <Route path='/' e xact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/talk' element={<TalkPage />} />
      </Routes>
    </div>
     </Router>
  );
}

export default App;
