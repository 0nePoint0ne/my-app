import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class CheapNav extends React.Component {

	render(){
		return(
	<ul className = "nav-ul">
	  <li className ="nav-li"><a href="default.asp">Home</a></li>
	  <li className ="nav-li"><a href="news.asp">News</a></li>
	  <li className ="nav-li"><a href="contact.asp">Contact</a></li>
	  <li className ="nav-li"><a href="about.asp">About</a></li>
	</ul>
	);
}
}
export default CheapNav;