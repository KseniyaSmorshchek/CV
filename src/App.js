import React from 'react';
import Main from './components/Main/Main';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Info from './components/Info/Info';
import './App.css';

function App() {
  return (
    <div className="app">
      <Main />
      <div className='exp-edu'>
        <Experience />
        <Education />
      </div>
      <Skills />
      <Info />
    </div>
  );
}

export default App;
