import React, { Component } from 'react';

class AssidBar extends Component {
  constructor(){
    super();
    window.onscroll = function(){
      let back_to_top = document.querySelector('.back-to-top');
      if(window.pageYOffset <= 700){
        back_to_top.classList.remove('active');
        back_to_top.classList.add('no-active');
      }else{
        back_to_top.classList.remove('no-active');
        back_to_top.classList.add('active');
      }
    };
  }

  clickEvent(){
    const nav_menu = document.querySelector('.nav-menu');
    const icone_menu = document.querySelector('#icone_menu');

    if (icone_menu.classList.contains('bi-list')) {
        icone_menu.classList.remove('bi-list');
        icone_menu.classList.add('bi-x-lg');
        nav_menu.style.removeProperty('display');
        nav_menu.setAttribute('style', 'display: block !important;');
        nav_menu.classList.remove('d-none');
        nav_menu.classList.add('d-block');
    }else {
        icone_menu.classList.remove('bi-x-lg');
        icone_menu.classList.add('bi-list');
        nav_menu.style.removeProperty('display');
        nav_menu.setAttribute('style', 'display: none !important;');
    }
  }

  render() {
    return (
      <div>
        <div id='btn-menu' type='button' onClick={this.clickEvent}>
          <i className='bi bi-list' id='icone_menu'></i>
        </div>
        <header className='d-flex flex-column justify-content-center' id='navbar'>
          <nav className='navbar nav-menu'>
            <ul className='d-flex flex-column gap-1'>
              <li><a href='#home' className='nav-link scrollto'><i className='bi bi-house-door'></i> <span>Home</span></a></li>
              <li><a href='#about' className='nav-link scrollto'><i className='bi bi-person'></i> <span>About</span></a></li>
              <li><a href='#resume' className='nav-link scrollto'><i className='bi bi-file-earmark'></i> <span>Resume</span></a></li>
              <li><a href='#skills' className='nav-link scrollto'><i className="bi bi-sliders"></i> <span>Skills</span></a></li>
              <li><a href='#project' className='nav-link scrollto'><i className='bi bi-globe'></i> <span>Project</span></a></li>
              <li><a href='#services' className='nav-link scrollto'><i className='bi bi-hdd-stack'></i> <span>Services</span></a></li>
              <li><a href='#contact' className='nav-link scrollto'><i className='bi bi-envelope'></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </header>
        <div id='back'>
          <a href='#home' className='nav-link back-to-top d-flex align-items-center justify-content-center no-active'><i className='bi bi-arrow-up'></i></a>
        </div>
      </div>
    );
  }
}

export default AssidBar;
