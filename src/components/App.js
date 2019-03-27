import React from 'react';
import SearchBar from './SearchBar';
import google from '../apis/google';
import ResultList from './ResultList';
import Header from './Header';

class App extends React.Component {
    state={ results: [] }

    onTermSubmit = async (term) => {
        const response = await google.get('/v1', {
            params: {
            q : term
            }
        });

        this.setState({results: response.data.items});
        console.log(response);
        
    };

    

    render() {

        
        return (
            <div className="ui container">
                < Header />
                < SearchBar onTermSubmit={this.onTermSubmit}/>
                < ResultList results={this.state.results}/>
                
            </div>
            
        )
    }
}

export default App;