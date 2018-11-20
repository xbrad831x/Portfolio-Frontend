import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="card project-card text-center">
          <div className="card-body">
            <h2 className="card-title">Current Project</h2>
            <h4 class="card-subtitle text-muted">Project Title</h4>
            <img className="card-img" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" alt="" />
            <p className="card-text">Project Description</p>
            <NavLink to="/Portfolio"><button type="button" class="btn btn-info btn-current">Check it out in my portfolio!</button></NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
