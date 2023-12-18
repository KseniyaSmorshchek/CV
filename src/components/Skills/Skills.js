import React from 'react';
import '../../App.css';
import skillsData from './skillsData';

function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className='skills-container'>
      {skillsData.map((skill, index) => (
        <div key={index} className="skill">
          <img src={skill.image} alt={skill.name} />
          <h6>{skill.caption}</h6>
          <p>{skill.rating}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Skills;
