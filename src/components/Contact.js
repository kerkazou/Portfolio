import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='gap-md-5' id='contact'>
        <div id='title'>Contact Me</div>
        <div className='container d-flex flex-wrap justify-content-around align-items-center gap-3'>
          <div className='col-md-3 col-8 d-flex flex-column gap-md-3 gap-2'>
            <div className='d-flex align-items-center gap-3 contact-lec'>
              <i className="bi bi-geo-alt"></i>
              <div>
                <div>Location:</div>
                <div>Youssoufia, MOROCO</div>
              </div>
            </div>
            <div className='d-flex align-items-center gap-3 contact-lec'>
              <i className="bi bi-envelope"></i>
              <div>
                <div>Email:</div>
                <div>kerkazou.zakaria@gamil.com</div>
              </div>
            </div>
            <div className='d-flex align-items-center gap-3 contact-lec'>
              <i className="bi bi-phone"></i>
              <div>
                <div>Call:</div>
                <div>+2126-2276-6915</div>
              </div>
            </div>
          </div>
          <div className='col-md-7 col-10'>
            <div className='row d-flex flex-wrap justify-content-around align-items-center gap-md-3 gap-2'>
              <div className='form-group d-flex flex-wrap gap-md-0 gap-2'>
                <div className="col-md-6 col-12 pe-md-2">
                  <input type="text" className="form-control" placeholder="FirstName"></input>
                </div>
                <div className="col-md-6 col-12 ps-md-2">
                  <input type="text" className="form-control" placeholder="LastName"></input>
                </div>
              </div>
              <div className='form-group d-flex flex-wrap gap-md-0 gap-2'>
                <div className="col-md-6 col-12 pe-md-2">
                  <input type="text" className="form-control" placeholder="Email"></input>
                </div>
                <div className="col-md-6 col-12 ps-md-2">
                  <input type="text" className="form-control" placeholder="Object"></input>
                </div>
              </div>
              <div className="col-12">
                <textarea className="form-control col-12 form-group ps-3" placeholder="Message..."></textarea>
              </div>
              <button className="btn col-md-5 col-8" id='send'>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
