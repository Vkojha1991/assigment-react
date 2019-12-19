import React, { Component, Fragment } from 'react';
import profileImg from './../assets/img/profile-img.jpg';


const List = ({ items, onItemClick }) => (
    <Fragment>
      {
        items.map((item, i) => (
            <li key={i} className="sent-chat">
                <span className="profile-img">
                    <img src ={ profileImg } alt="" title="" />
                </span>
                <span className="texts">{ item }</span>
            </li> 
        ))
      }
    </Fragment>
  );

class Main extends Component {
    constructor() {
        super();
        this.state = {
            chatItems:false,
            inputValue:'',
            chatList:[],
            people:[]
        }
        this.toggleChat = this.toggleChat.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeypress = this.onKeypress.bind(this);
    }

    toggleChat() {
        this.setState({ chatItems: !this.state.chatItems });
    }

    onClick(){
        const { inputValue, chatList } = this.state;
        if (inputValue.length > 0 || !inputValue == null) {
          const nextState = [...chatList, inputValue];
          this.setState({ chatList: nextState, inputValue: '' });
        }
    }
    onKeypress(e){
        if(e.key === 'Enter') {
            const { inputValue, chatList } = this.state;
            if (inputValue.length > 0 || !inputValue == null) {
              const nextState = [...chatList, inputValue];
              this.setState({ chatList: nextState, inputValue: '' });
              
            } 
        }
    }
    onChange(e){
        this.setState({ inputValue: e.target.value });
    }

    componentDidMount() {
        const base_path = window.location.origin;
        fetch(`${ base_path }/users.json`)
            .then(response => {
                response.json().then(data => {
                    if (data.length > 0) {
                        this.setState({
                            people: data,
                        });
                    }
                });
            });
    }

    render() {
        const { chatList, inputValue, people } = this.state;


        return (
            <section className="section container-full">
                
                {/* Section title start here */}
                <h1><i className="fa fa-envelope" aria-hidden="true"></i> Messages</h1>
                {/* Section title end here */}

                {/* Full screen icons start here */}
                <div className="full-screen-icons">
                    <i className="fa fa-expand" aria-hidden="true"></i>
                </div>
                {/* Full screen icons end here */}

                <div className="chat-container">
                    <div className="people-info">
                        
                        {/* Chat list and active / total memebers start here */}
                        <div className="chat-listing">
							<h2>Chats</h2>
							<span className="chat-listing-count">2 / { people.length + 1 }</span>
                            {/* Used +1 to showing an extra for active state */}
						</div>
                        {/* Chat list and active / total memebers start here */}

						<div className="user-listing">
                            
                            {/* Current active user start here */}
                            <div className="user active">
								<div className="user-photo">
									<img alt="" title="" src = { profileImg }></img>
								</div>
								<div className="user-rightcol">
									<h3 className="user-title">Vikesh</h3>
									<span className="user-lastmessage">I will send you email</span>
								</div>
								<div className="user-chatdata">
									<div className="left-col"><span className="user-chatdata-date">19 Jan, 2019</span><span className="user-chatdata-time">3:40</span></div>
									<div className="right-col text-right"><span className="user-chatdata-replies">
									<i className="fa fa-eye green mr-5" aria-hidden="true"></i>14 Replies</span>
									<span className="user-chatdata-graph"><i className="fa fa-bar-chart purple mr-5" aria-hidden="true"></i>120/139</span>
									</div>
								</div>
							</div>
                            {/* Current active user start here */}

                            {/*All user showing by Api json data start here */}
                            {   people.map(users => (
                                <div key={ users.id } className="user">
                                    <div className="user-photo">
                                        <img alt="" title="" src = { profileImg }></img>
                                    </div>
                                    <div className="user-rightcol">
                                        <h3 className="user-title">{ users.name }</h3>
                                        <span className="user-lastmessage">{ users.message }</span>
                                    </div>
                                    <div className="user-chatdata">
                                        <div className="left-col"><span className="user-chatdata-date">{ users.date }</span><span className="user-chatdata-time">{ users.time }</span></div>
                                        <div className="right-col text-right"><span className="user-chatdata-replies">
                                        <i className="fa fa-eye green mr-5" aria-hidden="true"></i>{ users.replies } Replies</span>
                                        <span className="user-chatdata-graph"><i className="fa fa-bar-chart purple mr-5" aria-hidden="true"></i>{ users.reports } / 200</span>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                            {/*All user showing by Api json data end here */}

						</div>
                    </div>
                    <div className="tab-container">
                        
                        {/* Tabs links start here */}
                        <div className="tabs">
                            <ul>
                                <li className="currentTab"><i className="fa fa-eye" aria-hidden="true"></i> Replies</li>
                                <li><i className="fa fa-bar-chart" aria-hidden="true"></i>Reports</li>
                            </ul>
                        </div>
                        {/* Tabs links ends here */}

                        {/* Tabs content start here */}
                        <div className="tabs-content">
                            <section className="chatMessages">
                                <div className="discussion-group">
                                    <ul className="message">
                                        
                                        {/* Recieved chat start here */}
                                        <li className="recieve-chat">
                                            <span className="profile-img">
                                                <img src ={ profileImg } alt="" title="" />
                                            </span>
                                            <span className="texts">Hi</span>
                                        </li>
                                        {/* Recieved chat end here */}

                                        {/* Sent chat start here */}
                                        <li className="sent-chat">
                                            <span className="profile-img">
                                                <img src ={ profileImg } alt="" title="" />
                                            </span>
                                            <span className="texts">Hello Friends</span>
                                        </li>
                                        {/* Sent chat end here */}

                                        {/* All sending chat start here */}
                                        <List items={ chatList } onItemClick={this.handleItemClick} />
                                        {/* All sending chat end here */}

                                    </ul>
                                </div>
                                <div className="actions-group">
                                    <div className="chat-form">
                                        <div className="features">
                                            
                                            {/* All input type files start here */}
                                            <ul className={`file-type ` + ((this.state.chatItems) ? 'show' : 'hide')}>
                                                <li>
                                                    <i className="fa fa-volume-up" aria-hidden="true"></i>
                                                    <input type="file" /><span>Audio</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                                                    <input type="file" /><span>Video</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-text-width" aria-hidden="true"></i>
                                                    <input type="file" /><span>Text</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-file-image-o" aria-hidden="true"></i>
                                                    <input type="file" /><span>Image</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-microphone" aria-hidden="true"></i>
                                                    <input type="file" /><span>TTS</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-film" aria-hidden="true"></i>
                                                    <input type="file" /><span>Audio &amp; Text</span>
                                                </li>
                                            </ul>
                                            {/* All input type files end here */}

                                            {/* All input type files open on button click start here */}
                                            <button type="button" className="btn red" onClick = { this.toggleChat }>
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                            {/* All input type files open on button click end here */}
                                        </div>

                                        {/* Messege box start here */}
                                        <span className="textarea">
                                            <textarea onKeyPress = { this.onKeypress } value={ inputValue } onChange={this.onChange} placeholder="Enter your message..."></textarea>
                                        </span>
                                        {/* Messege box end here */}

                                        {/* Messege send botton start here */}
                                        <button type="button" className="btn red" onClick={ this.onClick }><i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
                                        {/* Messege send botton end here */}
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Tabs content end here */}

                    </div>
                </div>
            </section>
        );
    }
}

export default Main;