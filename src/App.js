import React, { Component } from 'react';
import AssidBar from './components/AssidBar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Project from './components/Project';
import Services from './components/Services';
import Contact from './components/Contact';
import Foother from './components/Foother';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <AssidBar />
        <Home />
        <About />
        <Resume />
        <Skills />
        <Project />
        <Services />
        <Contact />
        <Foother />
      </div>
    );
  }
}

export default App;
