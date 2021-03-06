import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { getUserInfo, setRoomID, updateProfileNav } from './../../ducks/reducer';
import { promises } from 'fs';
import { Link } from 'react-router-dom';
import messageBkgd from './../../assets/messageBkgd.jpg';

class Messages extends Component {
    constructor() {
        super();

        this.state ={
            messages: []
        }
    }

    componentDidMount() {
        this.props.updateProfileNav();
        let messagesArr = []
        axios.get('/api/user-data').then(res=>{
            this.props.getUserInfo(res.data) 
        })
        Promise.all([
            axios.get(`/api/sendermessages/${this.props.users.userid}`).then(res => {
                for (let i = res.data.length-1; i >= 0; i--) {
                    if(!messagesArr.find( message => {
                        return message.room_id === res.data[i].room_id
                    })){
                        messagesArr.push(res.data[i])
                    }      
                }
            }),
            axios.get(`/api/receivermessages/${this.props.users.userid}`).then(res => {
                for (let i = res.data.length-1; i >= 0; i--) {
                    if(!messagesArr.find( message =>message.room_id === res.data[i].room_id) ){
                        messagesArr.push(res.data[i])
                    }      
                }
                
            })
        ]).then(() => {
            this.setState({messages: messagesArr})
        })
    }

    joinRoom = (room_id) => {
        this.props.setRoomID(room_id)
    }

    render() {
        let messagesToDisplay = this.state.messages.map((e, i) => {
            return (
                
                <Link to={`/chat/${e.room_id}`} className="link_to_chat" key={e.fullname + i}>
                <div className="individual_message1">
                    <div className="individual_message" onClick={() => this.joinRoom(e.room_id)}>
                        <img className="messages_profile_icon" src={e.profile_pic} alt="profile_pic"/>
                        <div className="messages_name">{e.fullname}</div>
                        <div className='messages-side'>
                        <div className="messages_time">{e.message_time}</div>
                        <div className="messages_time">{e.message_date}</div>
                        </div>
                    </div>
                </div>
                </Link>
            )
        })
        return (
            <div className="Messages">
                <header className="Messages_header"><h3>MESSAGES:</h3></header>
                <div className="Message_list">
                    { messagesToDisplay }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      users: state.user,
      show_profile_nav: state.show_profile_nav
    };
  }
  
  export default connect(mapStateToProps, {getUserInfo, setRoomID, updateProfileNav})(Messages);