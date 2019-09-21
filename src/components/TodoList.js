import React, {useReducer} from 'react';
import { reducer, initialState } from '../reducers/reducer.js';

import Todo from './Todo.js';
import Form from './Form.js';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
console.log(state);
    const toggleCompleted = value => {
        return dispatch({ type: "TOGGLE_COMPLETED", payload: value});
        };

    return (
        <>
            <div>
        {state.list.map(current => {
          return <Todo item={current} key={current.id} toggle={() => {toggleCompleted(current)}} />;
        })}
      </div>
        <Form dispatch={dispatch} />
        </>
    );
};

export default TodoList;