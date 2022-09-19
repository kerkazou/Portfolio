import React, { Component } from 'react';
import Image from '../assets/card.png';

class Project extends Component {
  render() {
    return (
      <div className='gap-5' id='project'>
        <div id='title'>My Projects</div>
        <div className='d-flex flex-wrap justify-content-center align-items-center gap-2'>
          <a href='' className='card col-md-3 col-sm-5 col-10 d-flex flex-column justify-content-center align-items-center'>
            <div className='rounded p-2'><img src={Image} alt='Image' className="card-img-top"></img></div>
            <div className="card-body">
              <div className="card-title">Gestion Bancaire</div>
              <div className="card-text">Une application pour la gestion interne des banques.</div>
            </div>
          </a>
          <a href='' className='card col-md-3 col-sm-5 col-10 d-flex flex-column justify-content-center align-items-center'>
            <div className='rounded p-2'><img src={Image} alt='Image' className="card-img-top"></img></div>
            <div className="card-body">
              <div className="card-title">Gestion des commandes du restaurant</div>
              <div className="card-text">Une application web pour gérer les commandes quotidiennes du restaurant.</div>
            </div>
          </a>
          <a href='' className='card col-md-3 col-sm-5 col-10 d-flex flex-column justify-content-center align-items-center'>
            <div className='rounded p-2'><img src={Image} alt='Image' className="card-img-top"></img></div>
            <div className="card-body">
              <div className="card-title">E-Learning</div>
              <div className="card-text">Une application web pour gérer les gestions des affaires estudiabtes des apprennent Youcode.</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
