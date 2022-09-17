import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div id='resume'>
        <div id='title'>Resume</div>
        <div className='container d-md-flex'>
          <div className='container col-md-6'>
            <div className='title_2'>Education</div>
            <div id='body-education'>
              <div className='education'>
                <div className='title-education'>Licence professionnelle</div>
                <div>Instrumentation et système</div>
                <div>Ecole supérieur de technologie, Guelmim</div>
                <div>2019 – 2020</div>
              </div>
              <div className='education'>
                <div className='title-education'>Diplôme de brevet de technicien supérieur</div>
                <div>Electromécanique et système automatise </div>
                <div>Brevet de technicien supérieur, El-Jadida</div>
                <div>2017 – 2019</div>
              </div>
              <div className='education'>
                <div className='title-education'>Baccalauréat</div>
                <div>Science et technologie électrique</div>
                <div>Lycée JABER IBN HAYANE, Youssoufia</div>
                <div>2016 – 2017</div>
              </div>
            </div>
          </div>
          <div className='container col-md-6'>
            <div className='title_2'>Professional Experience</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
