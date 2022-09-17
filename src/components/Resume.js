import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div id='resume'>
        <div id='title'>Resume</div>
        <div className='container d-md-flex'>
          <div className='container col-md-5 col-10'>
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
          <div className='container col-md-5 col-10'>
            <div className='title_2'>Professional Experience</div>
            <div id='body-experience'>
              <div className='experience'>
                <div className='title-experience'>Maintenance électrique calcination</div>
                <div>office chérifien des phosphates (OCP), Youssoufia</div>
                <div>Juin 2019 - Mai 2019</div>
              </div>
              <div className='experience'>
                <div className='title-experience'>Maintenance centralisée</div>
                <div>Office chérifien des phosphates (OCP), Youssoufia</div>
                <div>Mars 2018 - Avril 2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
