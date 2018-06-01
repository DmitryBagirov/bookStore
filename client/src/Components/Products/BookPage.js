import React from 'react';
import Book from './Book';
import Auth from "../../Services/auth";

export default class BookPage extends React.Component {
	state = {
		id: this.props.match.params.id,
		book: []
	};

	componentWillMount() {
		fetch("/api/books/" + this.state.id, {
			method: "post",
			body: {
				login: localStorage.getItem('login')
			},
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem('token')
			}
		}).then(res => {
				return res.json()
		}).then(data => {
			if (data.expired === true) {
				Auth.logOut();
				this.props.history.push('/login');
			} else {
				this.setState({
					book: data.book[0]
				});
			}
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		const {book}  = this.state;
		return (
			<Book book = {book}/>
		);
	}
}