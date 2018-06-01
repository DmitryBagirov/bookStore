import React from 'react';
import './style.css';

export default class RegistrationComplete extends React.Component {
	render() {
		return(
			<div className="container congratulation">
				<h1>Регистрация завершена</h1>
				<hr/>
				<p>
					Уважаемый посетитель, спасибо за регистрацию на сайте BookStore!
					Для подтверждения регистрации на вашу почту было выслано сообщение.
				</p>
				<br/>
				<h3>Данные регистрации:</h3>
				<p>
					<strong>Логин: </strong> {this.props.login}<br/>
					<strong>Пароль:</strong> {this.props.password}<br/>
					<strong>Почта: </strong> {this.props.email}<br/>
				</p>
				<br/>
				<p>Приятного пользования услугами нашего сервиса! C уважением, команда BookStore</p>
			</div>
		);
	}
}