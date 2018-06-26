import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



class CheapNav extends React.Component {
	constructor() {
    super();
 
    this.state = {
      credential: null,
      id: "Gregory Krynski"
    };
 
    
  }
 


  handleChange(event) {
   
  }

	render(){
		return(

	
	<div>
	<ul className = "nav-ul">
	  <li className ="nav-left-li"><a href="default">Home</a></li>
	  <li className ="nav-left-li"><a href="news">News</a></li>
	  <li className ="nav-left-li"><a href="contact">Contact</a></li>
	  <li className ="nav-left-li"><a href="about">About</a></li>
	  <li className ="nav-right-li"><a href="about">{this.state.id}</a></li>
	</ul>
	</div>

	);
}
}
export default CheapNav;