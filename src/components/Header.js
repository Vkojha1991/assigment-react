import React, { Component } from 'react';
import logo from './../assets/img/logo.png';
import profileImg from './../assets/img/profile-img.jpg';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(){
        super();
        this.state = {
            dropdownHidden:false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({dropdownHidden: !this.state.dropdownHidden});
    }

    render() {
        //var showHide = this.state.dropdownHidden;
        return (
            <header className="header">
                <div className="container-full">

                    {/* Logo start here */}
                    <img  src = { logo } alt="Brand Logo" title="logo" className="logo"></img>
                    {/* Logo end here */}
                    
                    {/* Header tab start here */}
                    <div className="header-tabs">
                        <ul className="tab-list">
                            <li>
                                <Link to = "/">
                                    <i className="fa fa-users" aria-hidden="true"></i>
                                    <span className="tab-title">Groups</span>
                                </Link>
                            </li>
                            <li>
                                <Link to = "/" className="active">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span className="tab-title">Messages</span>
                                </Link>
                            </li>
                            <li>
                                <Link to = "/">
                                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                                    <span className="tab-title">Video calls</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Header tab end here */}

                    {/* Messages, notification bell and user infor start here */}
                    <div className="user-info">
                        <ul>
                            <li><Link to = "/"><i className="fa fa-question-circle-o" aria-hidden="true"></i></Link></li>
                            <li><Link to = "/" className="nc-show">
                                <span className="notification-bell">
                                    <span className="notification-count"></span>
                                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                                </span>
                            </Link></li>
                            <li>
                                <Link to = "/" className="usr-details" onClick = { this.toggleDropdown }>
                                    <span className="usr-img">
                                        <img src= {profileImg} alt="user name" title=" "></img>
                                    </span>
                                    <span className="user-name">Robin Wang</span>
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </Link>
                                <ul className={`dropdown ` + ((this.state.dropdownHidden) ? 'show' : 'hide')}>
                                    <li><Link to = "/">Profile</Link></li>
                                    <li><Link to = "/">Setting</Link></li>
                                    <li><Link to = "/">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* Messages, notification bell and user infor start here */}
                    
                </div>
            </header>
        );
    }
}

export default Header;