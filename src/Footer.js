import React, { Component } from 'react';
import logo from "./images/logo.png"
class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
                <img src={logo} alt="logo" className="logo" />
                <p>&copy; Moses Lazaro | Movies 2020</p>
            </div>
        );
    }
}

export default Footer;