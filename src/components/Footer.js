import React, { Component } from 'react';
import logo from './../assets/img/logo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-full">
                    <img src = { logo } alt="Brand Logo" title="" className="footer-logo"></img>
                </div>
            </footer>
        );
    }
}

export default Footer;