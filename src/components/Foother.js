import React, { Component } from 'react';

class Foother extends Component {
  render() {
    return (
      <div id='foother'>
        <div className='container d-flex flex-column align-items-center'>
          <div id='foother-title'>Kerkazou Zakaria</div>
          <div>
            <div id="foother-social">
              <a href='https://www.linkedin.com/in/kerkazou-zakaria-591768230/'><i class="bi bi-linkedin"></i></a>
              <a href='https://github.com/kerkazou'><i class="bi bi-github"></i></a>
              <a href='https://kerkazou-zakaria.com'><i class="bi bi-globe2"></i></a>
              <a href='https://kerkazou-zakaria.com'><i class="bi bi-twitter"></i></a>
              <a href='https://kerkazou-zakaria.com'><i class="bi bi-instagram"></i></a>
              <a href='https://kerkazou-zakaria.com'><i class="bi bi-facebook"></i></a>
            </div>
          </div>
          <div id="copyright">
            © Copyright 2022. All Rights Reserved
          </div>
          <div class="credits">Designed by Kerkazou</div>
        </div>
      </div>
    );
  }
}

export default Foother;
