import React, { Component } from 'react';
import { render } from 'react-dom';

class LoginPage extends Component {
	render() {
		return (
			<h1>Hello</h1>
		);
	}
}

document.write('<div id="root"></div>');
render(<LoginPage />, document.getElementById('root'));