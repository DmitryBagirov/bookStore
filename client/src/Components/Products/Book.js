import React from "react";
import "./book.css";

export default class Book extends React.Component {
	render() {
		let book = this.props.book;
		if (book.length === 0) return "";
		return (
			<div style={{textAlign: "left"}} >
				<img className="bookimg" src={"http://superbookstore:8080/api/images/" + book.image} alt="книга"/>
				<div className="bookDescription">
					<div className="bookTitle">
						{book.title}
					</div>
					<div className="bookAuthor">
						Автор: {book.author}
					</div>
					<div className="bookgenre">
						Жанр: {book.genre}
					</div>
					<div className="bottom">
						<h4>Описание</h4>
						<div className="descr">
							{book.description}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
