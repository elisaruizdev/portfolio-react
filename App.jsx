import React from 'react';
import './App.css';
import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Education from './components/Education';
import Experience from './components/Experience';
import Volunteer from './components/Volunteer';

import { CV } from "./CV/CV";


const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
    <Hero hero={hero} />
    <Volunteer volunteer={volunteer}/>
    <button
              className="button"
              onClick={() => setShowEducation(true)}
            >
              Formación
            </button>
            <button
              className="button"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>
        <div>
      {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
    
  );
}

export default App;
