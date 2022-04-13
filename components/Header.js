import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Header extends Component {
render() {
        return (
            <>
                <div className = "header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand">Bar-4-Bar </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                             data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                             aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Header;