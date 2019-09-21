import React from 'react';

const Todo = props => {

    return (
      <div
        className={`item${props.item.completed ? ' complete' : ''}`}
        onClick={props.toggle}
      >
        <p>{props.item.item}</p>
      </div>
    );
  };
  
export default Todo;