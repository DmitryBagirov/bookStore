import React from 'react';
import { Books } from './BooksPage';
import { getAllBooks } from '../../Services';

class ProductsPageWrapper extends React.Component {
    state = {
        books: []
    };

    componentWillMount() {
        getAllBooks((books) => {
            this.setState({
                books: books
            });
        });
    }

    render() {
        const { books } = this.state;
        return (
            <Books books={books} history={this.props.history}/>
        );
    }
}

export default ProductsPageWrapper;