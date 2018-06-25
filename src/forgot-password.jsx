import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from './AppleOnTopOfBooks.jpg';
import LoginMenu from './modal-login.jsx';
import './site.css';

 
const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

 
class ForgotPassword extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: true,
      login: false,
      password: null,
      credential: null
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
 
  closeModal() {
    if(this.state.login == true){
      this.setState({modalIsOpen: false});
    }
  }

 
  render() {
    return (
      <div>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyle}
          contentLabel="Login Modal"
        >
 
        
          <div className = "centerContent">
          <img src={logo} className="App-logo2" alt="logo" />
          <form>
        
            <ul classNames>
              <input type="email" value={this.state.password} placeholder="Email" />
           </ul>
            <ul>
            <input type="submit"  value="Send Email" onChange={this.recoverPassword}/>
            </ul>
     
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ForgotPassword;