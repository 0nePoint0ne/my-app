import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from './AppleOnTopOfBooks.jpg';
import ForgotPassword from './forgot-password.jsx';
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

 
class LoginMenu extends React.Component {
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
   // if(this.tryLoginUser() == true){
     this.setState({modalIsOpen: false});
  ///  }

  }

   tryLoginUser(){

    return false;//loginFunction();
  }

  recoverPassword(){
      this.closeModal();
      
  }

  handleChange(event) {
   // this.setState({: event.target.value});
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
 
        
          <div>
          <img src={logo} className="App-logo2" alt="logo" />
          <form>
        
            <ul classNames>
              <input type="email" value={this.state.password} onChange={this.handleChange} placeholder="Email" />
           </ul>
            <ul>
              <input type="password" value={this.state.credential} onChange={this.handleChange} placeholder="Password"/>
            </ul>
            <ul>
            <input type="submit" value="Login" onChange={this.tryLoginUser}/>
            <input type="button"  value="Forgot" onChange={this.recoverPassword}/>
            </ul>
     
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default LoginMenu;