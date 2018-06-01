import React from 'react';
import Auth from "../../Services/auth";

export default class Logout extends React.Component {
	//не круто
	render() {
		Auth.logOut();
		this.props.history.push('/');
		return '';
	}
}