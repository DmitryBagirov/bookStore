import React from "react";
import BookCol from "./BookCol";

export default class BookRow extends React.Component {
	render() {
		for(let i=0; i<this.props.items.length; i++) {
			this.props.items[i] = <BookCol key={i} book={this.props.items[i]} history={this.props.history}/>
		}
		return (
			<tr>
				{
					this.props.items
				}
			</tr>
		);
	}
}