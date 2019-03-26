import React from 'react';

class SearchBar extends React.Component {
    state={term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
        
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term)
    }

    

    render() {
        return (
            <div className="search-bar ui container raised padded text segment">
                <form className="ui form" action="" onSubmit={this.onFormSubmit}>
                    {/* <label htmlFor="searchBar">Search</label> */}
                    <input name="searchBar" placeholder="Search..." type="text" value={this.state.term} onChange={this.onInputChange}/>
                    <button className="ui button" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;