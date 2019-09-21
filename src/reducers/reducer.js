export const initialState = {
  list: 
    [
      {item: 'Laundry',
      completed: false,
      id: 12345},
      {item: 'Wash dishes',
      completed: false,
      id: 12346},
      {item: 'Vacuum',
      completed: false,
      id: 12347},
      {item: 'Study TK',
      completed: false,
      id: 12348}
    ]
  
};

export const reducer = (state, action) => {

  let newItem = {
    item: action.payload,
    completed: false,
    id: Date.now()
  };
  
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: [...state.list, newItem]
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        list: state.list.map(item => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        list: state.list.filter(item => !item.completed)
      };
    default:
      return state;
  }
};