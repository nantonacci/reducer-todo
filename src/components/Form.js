import React, { useState, useReducer } from 'react';


const Form = ({dispatch}) => {

    const [newItem, setNewItem] = useState('');

    const handleChanges = e => {
        setNewItem(e.target.value);
    };

    const addItem = e => {
        e.preventDefault();
        setNewItem('');
         dispatch({ type: 'ADD_ITEM', payload: newItem});
         setNewItem('');
    }

    const clearItem = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED'
        });
    }

    return (
        <>
            <form>
                <input
                className="itemInput"
                type="text"
                name="newItem"
                value={newItem}
                onChange={handleChanges}
                />
                <button onClick={addItem}>Add</button>
                 <button onClick={clearItem}>Clear Completed</button>
            </form>
        </>
    )
}

export default Form;
