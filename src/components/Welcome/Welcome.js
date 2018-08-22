import React, {Component} from 'react';
import axios from 'axios';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
      phone: ''
    }
  }

  changeZip(value) {
    this.setState({zip: value})
  }

  changePhone(value) {
    this.setState({phone: value})
  }

  confirm = async () => {
    if (this.state.zip.length >= 5) {
      let {zip, phone} = this.state;
      await axios.put(`/api/welcomeUserUpdate/${this.props.match.params.userid}`, {zip, phone});
      this.props.history.push(`/profile/${this.props.match.params.userid}`);
    } else {
      
    }
  }

  render() {
    return (
      <div className='welcome-page'>
        <span className='welcome-welcome'>Welcome</span>
        <p className='welcome-greeting'>
          We appreciate your interest in our services and look forward to helping you with your tool needs! This site consists of a truly handy and helpful community worth taking part in, and we couldn't be happier to have you as our latest member. As a new member, we ask that you treat others and their tools with the utmost respect.
        </p>
        <div className='welcome-section'>
          <p className='welcome-paragraph'>
            It is required that you supply us with your zipcode upon registration. This is to help ensure your experience is the best it can possibly be by giving you tools and user which are closest to your location. This will just give other users a general idea of where you're located. It will <span>NOT</span> give away your exact location/address.
          </p>
          <input className='welcome-input' placeholder='ZIPCODE' onChange={e => this.changeZip(e.target.value)}/>
        </div>
        <div className='welcome-section'>
          <p className='welcome-paragraph'>
            Your phone number is not required, however, granting us this additional line of contact will help to establish a more secure connection with you. We want to keep this community safe, and in the event of an emergency, having your phone number may help to uphold that safety. Your number will <span>NOT</span> be shared with other users.
          </p>
          <input className='welcome-input' placeholder='PHONE NUMBER' onChange={e => this.changePhone(e.target.value)}/>
        </div>
        <button className='welcome-confirm' onClick={() => this.confirm()}>Confirm</button>
      </div>
    )
  }
}