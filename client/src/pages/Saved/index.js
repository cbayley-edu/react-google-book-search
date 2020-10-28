
import React, { useState, useEffect, Component } from "react";
import API from "../../utils/API";
import Results from "../../components/Results";
import './style.css';

// function Saved() {
//     const [ savedState, setSavedState ] = useState({
//         savedBooks: []
//     });

//     useEffect(() => {
//         savedBooks()
//     }, []);

//     // Loads all books and sets them to books
//     function savedBooks() {
//         API.getBooks()
//         .then(res => setSavedState(res.data))
//         .catch(err => console.log(err));
//     };

//     return (
//         <div className="container">
//             <h2>Saved books</h2>
//             <Results books={savedState} />
//         </div>
//     )
// }

// export default Saved;

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved books</h2>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;