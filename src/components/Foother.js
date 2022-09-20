import React, { Component } from 'react';
import portfolio from '../Portfolio';

class Foother extends Component {
  render() {
    return (
      <div id='foother'>
        <div className='container d-flex flex-column align-items-center'>
          <div id='foother-title'>Kerkazou Zakaria</div>
          <div>
            <div id="foother-social">
              <a href={portfolio.information.linkedin}><i className="bi bi-linkedin"></i></a>
              <a href={portfolio.information.github}><i className="bi bi-github"></i></a>
              <a href={portfolio.information.website}><i className="bi bi-globe2"></i></a>
              <a href={portfolio.information.twitter}><i className="bi bi-twitter"></i></a>
              <a href={portfolio.information.instagram}><i className="bi bi-instagram"></i></a>
              <a href={portfolio.information.facebook}><i className="bi bi-facebook"></i></a>
            </div>
          </div>
          <div id="copyright">
            © Copyright 2022. All Rights Reserved
          </div>
          <div className="credits">Designed by {portfolio.information.lastname}</div>
        </div>
      </div>
    );
  }
}

export default Foother;
