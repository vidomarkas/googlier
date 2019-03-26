import React from 'react';
import SearchBar from './SearchBar';
import google from '../apis/google';

class App extends React.Component {
    state={ resultList: [] }

    onTermSubmit = async (term) => {
        const response = await google.get('/v1', {
            params: {
            q : term
            }
        });

        this.setState({resultList: response.data.items});
        console.log(this.state.resultList);
    };

    

    render() {
        return (
            <div className="ui container">
                < SearchBar onTermSubmit={this.onTermSubmit}/>
            </div>
            
        )
    }
}

export default App;