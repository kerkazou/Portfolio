import React, { Component } from 'react';
import portfolio from '../Portfolio';
import calculatrice from '../assets/project/calculatrice.png';
import covid_19 from '../assets/project/covid_19.png';
import e_learning from '../assets/project/e_learning.png';
import gestion_bancaire from '../assets/project/gestion_bancaire.png';
import gestion_des_contacts from '../assets/project/gestion_des_contacts.png';
import gestion_restaurant from '../assets/project/gestion_restaurant.png';
import r_stadium from '../assets/project/r_stadium.png';

class Project extends Component {
  render() {
    return (
      <div className='gap-5' id='project'>
        <div id='title'>My Projects</div>
        <div className='d-flex flex-wrap justify-content-center align-items-center gap-2'>
        {portfolio.projects.map((project) => (
          <a href={project.link} className='card col-md-3 col-sm-5 col-10 d-flex flex-column justify-content-center align-items-center'>
            <div className='rounded p-2'><img src={calculatrice} alt={'Image Of' + project.image} className="card-img-top"></img></div>
            <div className="card-body">
              <div className="card-title">{project.name}</div>
              <div className="card-text">{project.discruption}</div>
            </div>
          </a>
        ))}
        </div>
      </div>
    );
  }
}

export default Project;
