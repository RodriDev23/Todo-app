export const tudoReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TUDO':
        return [...state, action.payload];
  
      case 'REMOVE_TUDO':
        return state.filter((todo) => todo.id !== action.payload);
  
      case 'TOGGLE_TUDO':
        return state.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        });
  
      default:
        return state;
    }
  };
  