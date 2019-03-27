import React from 'react';

const Result = props =>  {
  
    return (
      <div className="ui segment">
        <div>
            <a target="_blank" href={props.result.link}>{props.result.title}</a>
        </div>
        <div>
            {props.result.link}
        </div>
        
      </div>
    )
 
}

export default Result;