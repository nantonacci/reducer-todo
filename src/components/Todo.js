// Using the reducer hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
// Now render your list of todos from your reducer in your app
import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer.js';

const Todo = () => {
    const [newItem, setNewItem] = useState();

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewItem(e.target.value);
    };

    return (
        <div>
            <p>{state.item}</p>
            <div>
                <input
                className="itemInput"
                type="text"
                name="newItem"
                value={newItem}
                onChange={handleChanges}
                />
                <button onClick={() => dispatch({type: 'UPDATE_ITEM', payload: newItem})}>Add</button>
            </div>
        </div>
    )
}

export default Todo;