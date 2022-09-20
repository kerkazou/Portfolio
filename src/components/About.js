import React, { Component } from 'react';
import Image from '../assets/image.png';
import portfolio from '../Portfolio';


class About extends Component {
  render() {
    return (      
      <div id='about'>
        <div id='title'>About Me</div>
        <div className='title_2'>UI/UX Designer & Web Developer.</div>
        <div className='w-100 d-flex'>
          <div className='col-lg-6 col-md-5 d-md-flex d-none flex-column justify-content-center align-items-center gap-2'>
            <img src={Image} alt="Logo"/>
            <div className='d-flex gap-3'>
              <a href={portfolio.information.linkedin}><i className="bi bi-linkedin h3"></i></a>
              <a href={portfolio.information.github}><i className="bi bi-github h3"></i></a>
              <a href={portfolio.information.website}><i className="bi bi-globe2 h3"></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 col-12 d-flex justify-content-center align-items-center">
            <div id='info'>
              <ul>
                <li><span>Name:</span><span>{portfolio.information.lastname +" "+ portfolio.information.firstname}</span></li>
                <li><span>Age:</span><span>{portfolio.information.age} years</span></li>
                <li><span>City:</span><span>{portfolio.information.localisation}</span></li>
                <li><span>Email:</span><span>{portfolio.information.email}</span></li>
                <li><span>Phone:</span><span>{portfolio.information.phone}</span></li>
                <li><span>Website:</span><span>{portfolio.information.website}</span></li>
                <li><span>Degree:</span><span>{portfolio.information.degree}</span></li>
                <li><span>Freelance:</span><span>{portfolio.information.freelance}</span></li>
                <li><div id='n_project'><span>{portfolio.projects.length}</span> <span>Project complete</span></div></li>
              </ul>
              <div className='d-flex flex-column align-items-center'>
                <button className="btn p-3" id='download'>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
