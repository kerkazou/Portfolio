import React, { Component } from 'react';
import Portfolio from '../Portfolio';

class Skills extends Component {

  render() {
    return (
        <div id='skills'>    
            <div id='title'>My Skills</div>
            <div className='container d-md-flex flex-wrap justify-content-center'>
            {Portfolio.skills.map((skill) => (
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>{skill.name}</span><span>{skill.value}%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: skill.value+"%"}} aria-valuenow="{skill.value}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
  }
}

export default Skills;
