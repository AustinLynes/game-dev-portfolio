import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';

import Navbar from "./components/nav-bar"

import HomePage from "./pages/home"
import ProjectsPage from "./pages/projects"
import ContactPage from './pages/home/contact';
import SkillsPage from './pages/home/skills';
import AboutPage from './pages/home/about';

import NotFound  from './components/errors/notfound';

function Content(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/*" component={NotFound} />
      </Routes>
      <Navbar />
    </Router>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    setTimeout(()=>{setIsLoading(false)}, 3000);
  }, []);

  return (
    <div className="App">
      
      <Content/>
      {/* { isLoading ? < null} */}

    </div>
  );
}

export default App;
