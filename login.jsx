import React, { Component } from 'react';
import { render } from 'react-dom';

class LoginPage extends Component {
	render() {
		return (
		  <div className="login-wrapper">
		  
		    {/* 左边图片 */}
			<div className="login-left">
			  <img src="http://res.cloudinary.com/dzqowkhxu/image/upload/v1513679279/bg-login_bxxfkf.png" />
			  <div className="h1">Enter the Nebula</div>
			</div>
		
		    {/* 右边登录表单 */}
			<div className="login-right">

			  <div className="h2">Register</div>
			
			  <div className="form-group">
			    <input type="text" id="full-name" placeholder="Full Name" />
			    <label for="full-name">Full Name</label>    
			  </div>
			
			  <div className="form-group">
			    <input type="text" id="Email" placeholder="Email" />
			    <label for="Email">Email</label>    
			  </div>
			 
			  <div className="form-group">
			    <input type="password" id="Password" placeholder="Password" />
			    <label for="Password">Password</label>    
			  </div>
		
		      <div className="checkbox-container">
		        <input type="checkbox" />
		        <div className="text-checkbox">I agree with the terms of service.</div>
		      </div>

			  <div className="button-area">
			    <button className="btn btn-secondary">Login</button>
			    <button className="btn btn-primary">Sign Up</button>
			  </div>
	        </div>
		  </div>
		);
	}
}

document.write('<div id="root"></div>');
render(<LoginPage />, document.getElementById('root'));