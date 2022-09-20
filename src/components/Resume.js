import React, { Component } from 'react';
import portfolio from '../Portfolio';

class Resume extends Component {
  render() {
    return (
      <div id='resume'>
        <div id='title'>Resume</div>
        <div className='container d-md-flex'>
          <div className='container col-md-5 col-10'>
            <div className='title_2'>Education</div>
            <div id='body-education'>
              {portfolio.educations.map((education) => (
                <div className='education'>
                  <div className='title-education'>{education.name}</div>
                  <div>{education.option}</div>
                  <div>{education.location}</div>
                  <div>{education.year}</div>
                </div>
              ))}
            </div>
          </div>
          <div className='container col-md-5 col-10'>
            <div className='title_2'>Professional Experience</div>
            <div id='body-experience'>
              {portfolio.professionals.map((professional) => (
                <div className='experience'>
                  <div className='title-experience'>{professional.feature}</div>
                  <div>{professional.company}</div>
                  <div>{professional.during}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
