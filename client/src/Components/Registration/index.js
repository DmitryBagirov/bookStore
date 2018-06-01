import React from "react";
import {Form} from "semantic-ui-react";
import "./style.css";
import {Button} from "react-bootstrap";
import Input from "./Input";
import RegistrationComplete from './complete';

export default class Registration extends React.Component {

	state = {
		login: '',
		password: '',
		email: '',
		confirmPassword: '',
		loginValid: false,
		pwdValid: false,
		pwdConfValid: false,
		emailValid: false,
		formValid: false,
		loginTooltip: '',
		completed: false
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.formValid) {
			return;
		}
		fetch("/api/registration", {
			method: "post",
			body: JSON.stringify({
				login: this.state.login,
				password: this.state.password,
				email: this.state.email
			}),
			headers: {"Content-Type": "application/json"}
		}).then(res => {
			return res.json()
		}).then(token => {
			switch (token.status) {
				case 0:
					console.log(token);
					this.setState({completed: true});
					return;
				case 1:
					this.setState({
						loginTooltip: 'Логин занят',
						loginValid: false
					});
					return;
				case 2://что-то не так
					return;
			}
		}).catch(err => {
			console.log(err);
		});
	};

	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
		this.check();
	};

	check() {
		let login = this.state.login.match(/^[a-zA-Z0-9]+$/) !== null,
			password = this.state.password.match(/^[a-zA-Z0-9]+$/) !== null && this.state.password.length > 6,
			confirmPassword = this.state.password === this.state.confirmPassword && this.state.confirmPassword.length > 6,
			email = this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
		this.setState({
			loginValid: login,
			pwdValid: password,
			pwdConfValid: confirmPassword,
			emailValid: email,
			formValid: login && password && confirmPassword && email,
			loginTooltip: ''
		});
	}

	render() {
		let {login, password, email, confirmPassword} = this.state,
			loginTooltip = this.state.loginTooltip;
		if (this.state.completed) {
			return (
				<RegistrationComplete login={this.state.login} password={this.state.password} email={this.state.email}/>
			)
		} else
		return (
			<div className="form">
				<Form onSubmit={e => this.onSubmit(e)} method="POST" className="loginForm">
					<Input label="Логин" name="login" value={login} title={loginTooltip} type="text"
					       isValid={this.state.loginValid}
					       onChange={e => this.onChange(e)}/>
					<Input label="Пароль" name="password" value={password} isValid={this.state.pwdValid} type="password"
					       onChange={e => this.onChange(e)}/>
					<Input label="Повторите пароль" name="confirmPassword" isValid={this.state.pwdConfValid}
					       value={confirmPassword} type="password" onChange={e => this.onChange(e)}/>
					<Input label="Почта" name="email" value={email} type="text" isValid={this.state.emailValid}
					       onChange={e => this.onChange(e)}/>
					<Button type="submit" className="btn-success" style={{width: "200px"}}>
						Регистрация
					</Button>
				</Form>
			</div>
		);
	}
}