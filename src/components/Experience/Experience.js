// Experience.js
import React from 'react';
import '../../App.css';

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className='experience-container'>
          <div className="experience-item">
          <h3>React "Redux Notion-project"</h3>
          <p className="description">Notion is a multi-user note-taking application. Each user can create and edit their notes.</p>
          <button onClick={() => window.open("https://github.com/markvadimov/redux/")}>Check</button>
          </div>

          <div className="experience-item">
          <h3>React "Online Store"</h3>
          <p className="description">An online clothing and footwear store with search, filter and product sorting sections.</p>
          <button onClick={() => window.open("https://codesandbox.io/p/sandbox/modest-ully-8hqnw9")}>Check</button>
          </div>

          <div className="experience-item">
          <h3>React "API SPA Project"</h3>
          <p className="description">Multi-page application using an external API and react-router-dom library.</p>
          <button onClick={() => window.open("https://codesandbox.io/p/sandbox/intelligent-bogdan-m6ct8r?file=%2Fsrc%2Findex.js")}>Check</button>
          </div>

          <div className="experience-item">
          <h3>Unity "Quest-Game"</h3>
          <p className="description">A first-person quest game, which includes a location from a castle and a village, in which you need to complete several tasks and go through the full plot of Vladimir Karatkevich’s novel “Black Castle Olshansky”</p>
          <p>In process</p>
          </div>
      </div>
    </div>
  );
}

export default Experience;
