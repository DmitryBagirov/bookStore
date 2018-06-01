import React from "react";
import BookRow from "./BookRow";

export class BooksTable extends React.Component {
	render() {
		let rows = this.listToMatrix(this.props.books, this.props.cols);
		console.log(rows);
		for (let i = 0; i < rows.length; i++) {
			rows[i] = <BookRow key={i} items={rows[i]} history={this.props.history}/>
		}
		return <table>
			<tbody>{rows}</tbody>
		</table>;
	}

	listToMatrix(list, elementsPerSubArray) {
		let matrix = [], i, k;
		for (i = 0, k = -1; i < list.length; i++) {
			if (i % elementsPerSubArray === 0) {
				k++;
				matrix[k] = [];
			}

			matrix[k].push(list[i]);
		}
		return matrix;
	}
}