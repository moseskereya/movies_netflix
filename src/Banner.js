import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className="showcase">
                <div className="showcase-top">
                    <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
                    <a href="https://www.netflix.com/tz-en/login" class="btn btn-rounded">Sign In</a>
                </div>
                <div className="showcase-content">
                    <h1>See what's next</h1>

                    <p>Watch anywhere. Cancel Anytime</p>
                    <Link className="link" to="/Movies">
                        <p className="btn btn-xl"
                        >Watch Free For 30 Days <i class="fas fa-chevron-right btn-icon"></i
                        ></p>
                    </Link>
                </div>
            </header>
        );
    }
}


export default Banner;