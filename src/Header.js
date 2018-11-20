import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mx-auto mt-0 mt-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}