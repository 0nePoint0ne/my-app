import React, {Component} from 'react';
import BootStrap from './bootstrap/css/bootstrap.css';

class MenuBar extends Component {
	render(){



		const list = ['View', 'Add', 'Delete'];
		return(

		list.map( item => {

		return(
				<div><a href={item}>{item}</a></div>
			   )
			})

		);
	}
}

export default MenuBar;

