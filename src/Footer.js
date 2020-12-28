import React, { Component } from 'react';
import logo from "./images/logo.png"
class Footer extends Component {
    state = { time: new Date()}
    render() {
        return (
            <div className="footer">
                <img src={logo} alt="logo" className="logo" />
                <p>&copy; Moses Lazaro | Movies {this.state.time.toDateString()}</p>
            </div>
        );
    }
}

export default Footer;