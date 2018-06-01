import React from "react";
import {Form} from "semantic-ui-react";
import "./style.css";
import {Button} from "react-bootstrap";
import Input from "./Input";
import Auth from "../../Services/auth";

export default class Login extends React.Component {

	state = {
		login: '',
		password: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		Auth.logIn(this.state.login, this.state.password, this.props.history);
	};

	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	render() {
		let {login, password} = this.state;
		return (
			<div className="form">
				<Form onSubmit={e => this.onSubmit(e)} method="POST" className="loginForm">
					<Input label="Логин" name="login" value={login} type="text"
					       onChange={e => this.onChange(e)}/>
					<Input label="Пароль" name="password" value={password} type="password"
					       onChange={e => this.onChange(e)}/>
					<Button type="submit" className="btn-success" style={{width: "200px"}}>
						Войти
					</Button>
				</Form>
			</div>
		);
	}
}