import React from "react";
import {Container, Header} from "semantic-ui-react";
import {BooksTable} from "./BooksTable"

export const Books = (props) => (
	//<Container style={{marginTop: '7em', textAlign: "left", padding: "50px", boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.6)"}}>
	<div>
		{
			props.books.length > 0 &&
			<BooksTable books={props.books} history={props.history} cols = "2"/>
		}
	</div>//</Container>
);