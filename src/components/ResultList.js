import React from 'react';
import Result from './Result';


const ResultList = ({results}) => {
    const renderedList = results.map((result) => {
        return < Result result={result}/>
    });
    return (
        <div>{renderedList }</div>
    )
}

export default ResultList;