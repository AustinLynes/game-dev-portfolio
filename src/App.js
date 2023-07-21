import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';

import Navbar from "./components/nav-bar"

import HomePage from "./pages/home"
import ProjectsPage from "./pages/projects"

import NotFound  from './components/errors/notfound';
import AboutPage from './pages/home/about';

function Content(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/about-me" element={<AboutPage/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      <Content/>
    </div>
  );
}

export default App;
