import React, { useState, useEffect, Component  } from "react";
import Form from "../../components/Form";
import Results from "../../components/Results";
import API from "../../utils/API";
import './style.css';

// function Search() {
//     const [ searchState, setSearchState ] = useState({
//         value: "",
//         books: []
//     });

//     // Loads all books and sets them to books
//     const searchBook = (query) => {
//         API.getBook(query)
//             .then(res => this.setSearchState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
//             .catch(err => console.error(err));
//     };

//     useEffect(() => {
//         searchBook()
//     }, []);
    

//     const makeBook = bookData => {
//         return {
//             _id: bookData.id,
//             authors: bookData.volumeInfo.authors,
//             description: bookData.volumeInfo.description,
//             image: bookData.volumeInfo.imageLinks.thumbnail,
//             link: bookData.volumeInfo.previewLink,
//             title: bookData.volumeInfo.title
//         }
//     }

//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setSearchState({
//           ...searchState,
//           [name]: value,
//         });
//         console.log(searchState);
//       };

//     const handleSubmit = (e) => {
//         console.log(searchState);
//         e.preventDefault();
//         searchBook(searchState);
//     };

//     return (
//         <div>
//             <Form
//                 search={searchState.search}
//                 onChange={handleChange}
//                 onClick={handleSubmit}
//             />
//             <div className="container">
//                 <h2>Results</h2>
//                 <Results books={searchState.books} />
//             </div>
//         </div>
//     )
// }

// export default Search;



class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();
    }

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default Search;
