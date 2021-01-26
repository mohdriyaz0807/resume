import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Works from './Components/Works';

import resumedata from './resumeData'

const App=()=>{
    return (
      <div className="App">
        <Header data={resumedata}/>
        <About data={resumedata}/>
        <Works data={resumedata.portfolio}/>
        <Skill data={resumedata.resume}/>
        <Resume data={resumedata.resume}/>
        <Contact data={resumedata}/>
        <Footer data={resumedata}/>
      </div>
    );
  }

export default App;
