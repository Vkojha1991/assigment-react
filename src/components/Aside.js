import React, { Component, Fragment } from 'react';
import profileImg from './../assets/img/profile-img.jpg';
import { Link } from "react-router-dom";

class Aside extends Component {
    constructor() {
        super();
        this.state = {
            showAside:false
        }
        this.openAside = this.openAside.bind(this);
        this.closeAside = this.closeAside.bind(this);
    }

    openAside() {
        this.setState({ showAside:true })
    }

    closeAside() {
        this.setState({ showAside:false })
    }

    render() {
        return (
            <Fragment>
                <span className="aside-nav" onClick={ this.openAside }><i className="fa fa-bars" aria-hidden="true"></i></span>
                <aside className= {`left-panel ` + ((this.state.showAside) ? 'show' : 'hide')}>
                    <span className="aside-nav-close" onClick={ this.closeAside }><i className="fa fa-times" aria-hidden="true"></i></span>
                    <div className="profile-details mb-30">
                        <figure className="profile-pic">
                            <img src={profileImg} alt="Robin wang" title=""></img>
                        </figure>
                        <h2 className="name">Robin Wang</h2>
                        <p className="desc"><small>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</small></p>
                    </div>
                    <div className="actions-group-aside">
                        <ul>
                            <li>
                                <Link to="/" className="btn white active">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    <span>Messages</span>
                                </Link>
                                <ul>
                                    <li><Link to="/" className="active">Chat</Link></li>
                                    <li><Link to="/">Send messages</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/" className="btn white">
                                    <i className="fa fa-users" aria-hidden="true"></i>
                                    <span>Groups</span>
                                </Link>
                                <ul>
                                    <li><Link to="/">History</Link></li>
                                    <li><Link to="/">Create Group</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/" className="btn white">
                                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                                    <span>Video Calls</span>
                                </Link>
                                <ul>
                                    <li><Link to="/">History</Link></li>
                                    <li><Link to="/">Calls</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </aside>
            </Fragment>
        );
    }
}

export default Aside;