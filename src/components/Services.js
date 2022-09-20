import React, { Component } from 'react';
import portfolio from '../Portfolio';

class Services extends Component {
  render() {
    return (
      <div className='gap-5' id='services'>
        <div id='title'>Services</div>
        <div className='w-100 d-flex flex-wrap justify-content-center align-items-center gap-4'>
        {portfolio.services.map((service) => (
          <div className='col-md-3 col-sm-5 col-10 d-flex flex-column justify-content-center align-items-center services-cart'>
            <i className={service.icone}></i>
            <div>{service.name}</div>
            <div>{service.discruption}</div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Services;
