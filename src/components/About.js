import React, { Component } from 'react';
import Image from '../assets/image.png';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <div id='title'>About Me</div>
        <div id='title_2'>UI/UX Designer & Web Developer.</div>
        <div className='w-100 d-flex'>
          <div className='col-lg-6 col-md-5 d-md-flex d-none justify-content-center align-items-center'>
            <img src={Image} alt="Logo"/>
          </div>
          <div className="col-lg-6 col-md-7 col-12 d-flex justify-content-center align-items-center">
            <div id='info'>
              <ul>
                <li><span>Name:</span> <span>Kerkazou Zakaria</span></li>
                <li><span>Age:</span> <span>24 years</span></li>
                <li><span>City:</span> <span>Youssoufia, MOROCO</span></li>
                <li><span>Website:</span> <span>www.kerkazou-zakaria.com</span></li>
                <li><span>Email:</span> <span>kerkazou.zakaria@gmail.com</span></li>
                <li><span>Phone:</span> <span>+2126-2276-6915</span></li>
                <li><span>Degree:</span> <span>Licence</span></li>
                <li><span>Freelance:</span> <span>Available</span></li>
                <li><div id='n_project'><span>100</span> <span>Project complete</span></div></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center gap-3'>
          <button className="btn p-3" id='download'>Download CV</button>
        </div>
      </div>
    );
  }
}

export default About;
