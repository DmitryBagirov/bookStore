import React from "react";
import {Container, Form} from "semantic-ui-react";
import "../Layout/style.css";
import {BooksTable} from "./BooksTable";

export default class SearchPage extends React.Component {

	constructor() {
		super();
		this.state = {
			searchQuery: '',
			column: '',
			books: []
		};
	}

	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	onSubmit = (e) => {
		e.preventDefault();
		fetch("/api/books", {
			method: "post",
			body: JSON.stringify({
				searchQuery: this.state.searchQuery,
				column: this.state.column
			}),
			headers: {"Content-Type": "application/json"}
		}).then(res => {
			return res.json()
		}).then(books => {
			this.setState({books: books});
		}).catch(err => {
			console.log(err);
		});
	};

	render() {
		const {searchQuery} = this.state;
		return (
			<Container>
				<div className="searchForm">
					<Form to="/search" onSubmit={e => this.onSubmit(e)} method="POST">
						<select name="column" onChange={e => this.onChange(e)} style={{height: "40px", width: "200px", display: "inline-block"}}>
							<option value="id">Код книги</option>
							<option value="title">Заголовок</option>
							<option value="author">Автор</option>
							<option value="genre">Жанр</option>
						</select>
						<input id="area" type="text" className="searchArea" name="searchQuery" value={searchQuery}
						       onChange={e => this.onChange(e)}
						       placeholder="Введите запрос"/>
						<input type="image" src="/assets/search.png" className="searchImg"/>
					</Form>
				</div>
				<BooksTable books={this.state.books} cols="2"/>
			</Container>
		)
	}
}