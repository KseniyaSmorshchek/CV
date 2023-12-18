// Education.js
import React from 'react';
import '../../App.css';

function Education() {
  return (
    <div className="education">
      <div className='education-container'>    
          <h2>Education</h2>
          <div>
                    <h4 className="name">IT-specialist (Physics + Mathematics + IT)</h4>
                    <p className="meta">Liceum №1 Brest • 2018 — 2020</p>
          </div>
          <div>
                    <h4 className="name">Mathematical and software engineering for mobile devices</h4>
                    <p className="meta">Your University • 2020 — present time</p>
          </div>
      </div>
      <div className='languages-container'>
          <h2>Languages</h2>
          <p>🇷🇺 Russian</p>
          <p>🇬🇧 English</p>
       </div>
    </div>
  );
}

export default Education;
