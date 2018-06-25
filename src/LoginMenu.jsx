import React, {Component} from 'react';
import BootStrap from './bootstrap/css/bootstrap.css';

class LoginMenu extends Component {
	componentWill(){
		("modal").show();
	}

	render(){
		return(
<div id="modal" className="modal">
	<form>
	<ul>
	<li>
	  	<label>
	    	Name:
	    </label>
	 </li>
	 <li>
	    	<input type="email" name="name" />
	</li>
	<li>
		<label>
	  		Password:
	  		</label>
	  		</li>
	  		<li>
	 		<input type="Password" name="name" />
	</li>
	  <input type="submit" value="Login" />
	  <a href="Forgot">Forgot</a>
	  </ul>
	</form>
</div>
	);
	}
}
export default LoginMenu;
