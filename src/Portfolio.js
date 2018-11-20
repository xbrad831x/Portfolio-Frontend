import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

const array = [
    {
        title: 'title',
        categories: 'Web',
        image : 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis sem vel auctor luctus. Sed ut augue ut ligula suscipit maximus sed sit amet risus. Quisque varius finibus erat, vitae varius augue elementum ac. Quisque metus neque, lacinia iaculis est sed, laoreet posuere turpis. Suspendisse potenti. Aenean varius tellus a nisi tristique condimentum.',
        github: 'https://github.com/xbrad831x'
    },
    {
        title: 'title',
        categories: 'Web',
        image : 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis sem vel auctor luctus. Sed ut augue ut ligula suscipit maximus sed sit amet risus. Quisque varius finibus erat, vitae varius augue elementum ac. Quisque metus neque, lacinia iaculis est sed, laoreet posuere turpis. Suspendisse potenti. Aenean varius tellus a nisi tristique condimentum.',
        github: 'https://github.com/xbrad831x'
    },
    {
        title: 'title',
        categories: 'Web',
        image : 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis sem vel auctor luctus. Sed ut augue ut ligula suscipit maximus sed sit amet risus. Quisque varius finibus erat, vitae varius augue elementum ac. Quisque metus neque, lacinia iaculis est sed, laoreet posuere turpis. Suspendisse potenti. Aenean varius tellus a nisi tristique condimentum.',
        github: 'https://github.com/xbrad831x'
    },
    {
        title: 'title',
        categories: 'Web',
        image : 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis sem vel auctor luctus. Sed ut augue ut ligula suscipit maximus sed sit amet risus. Quisque varius finibus erat, vitae varius augue elementum ac. Quisque metus neque, lacinia iaculis est sed, laoreet posuere turpis. Suspendisse potenti. Aenean varius tellus a nisi tristique condimentum.',
        github: 'https://github.com/xbrad831x'
    },
    
]

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        {array.map(project => {
                            return (
                                <div className="col-4">
                                    <div className="card portfolio-card text-center">
                                        <div className="card-body">
                                            <h2 className="card-title">{project.title}</h2>
                                            <h4 className="card-subtitle text-muted">{project.categories}</h4>
                                            <img className="card-img" src={project.image} alt="" />
                                            <p className="card-text">{project.description}</p>
                                        </div>
                                        <div className="card-footer text-muted">
                                            Repository: {project.github}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}