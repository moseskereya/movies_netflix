import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DM from "../images/logo.png"
import User from "../images/user.jpg"
import Movie from "../movie_search"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav>
                <div >
                    <img className="logo" src={DM} alt="Logo" />
                </div>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Movies">Movies</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Shows">TV Shows</Link>
                    </li>
                </ul>
                <Movie />
                <div>
                    <img className="logo-2" src={User} alt="user" />
                </div>
            </nav>
        );
    }
}

export default Nav;