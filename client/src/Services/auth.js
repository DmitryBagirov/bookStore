import React from 'react';

export default class Auth extends React.Component{
	static init() {
		if (localStorage.getItem('auth') === null) {
			this.auth = false;
		}
	}

	static isAuth() {
		if (Date.now() < parseInt(localStorage.getItem('expire'))) {
			return localStorage.getItem('auth') !== null && localStorage.getItem('auth');
		} else {
			this.logOut();
			return false;
		}
	}

	static logIn(login, password, history, redirect) {
		fetch("/api/login", {
			method: "post",
			body: JSON.stringify({
				login: login,
				password: password,
			}),
			headers: {"Content-Type": "application/json"}
		}).then(res => {
			return res.json()
		}).then(result => {
			switch (result.status) {
				case 0:
					for(let key in result.user) {
						localStorage.setItem(key, result.user[key]);
					}
					localStorage.setItem("token", result.token);
					localStorage.setItem('expire', result.expire === undefined ? -1 : Date.now() + parseInt(result.expire));
					localStorage.setItem("auth", true);
					if (history !== undefined) {
						history.goBack();//push(redirect);
					}
					return;
				case 1:
					//что-то с бд
					return;
				case 2://нет таких
					return;
			}
		}).catch(err => {
			console.log(err);
		});
	}

	static logOut() {
		localStorage.removeItem('auth');
		localStorage.removeItem('login');
		localStorage.removeItem('email');
		localStorage.removeItem('token');
		this.auth = false;
	}
}