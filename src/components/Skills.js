import React, { Component } from 'react';

class Skills extends Component {

  render() {
    return (
        <div id='skills'>    
            <div id='title'>My Skills</div>
            <div className='container d-md-flex flex-wrap justify-content-center'>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>Photoshop</span><span>75%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>Illestrator</span><span>75%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>HTML</span><span>90%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>CSS</span><span>90%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>JavaScript</span><span>80%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>PHP</span><span>85%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>WordPress</span><span>80%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='container col-md-5 col-11 d-flex flex-column gap-2 mt-2'>
                    <div className="d-flex justify-content-between progress-title"><span>SEO</span><span>80%</span></div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Skills;
