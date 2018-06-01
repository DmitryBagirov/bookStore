import React from "react";
import "./books.css";

export default class BookCol extends React.Component {
	onClick(e) {
		e.preventDefault();
		this.props.history.push('books/' + this.props.book.id);
	}

	render() {
		return (
			<td>
				<div className="book">
					<img className="cover" src={'http://superbookstore:8080/api/images/' + this.props.book.image} alt=""/>
					<div className="description">
						<a href={"books/" + this.props.book.id} onClick={e => this.onClick(e)}>
							<div className="title">
								{this.props.book.title}
							</div>
						</a>
						<div className="author">
							{this.props.book.author}
						</div>
						<div className="descript">
							{this.props.book.description}
						</div>
						<a href={"books/" + this.props.book.id} onClick={e => this.onClick(e)}>
							<div className="dots">
								...
							</div>
						</a>
						<div className="foot">
							<div className="genre">
								Жанр: {this.props.book.genre}
							</div>
							<div className="bookPrice">
								<span className="red">Цена:  </span>
								{this.props.book.price} ₽
							</div>
						</div>
					</div>
				</div>
			</td>
		);
	}
}
