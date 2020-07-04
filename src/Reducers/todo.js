const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOOGLE_TODO":
      if (action.id !== state.id) {
        return state;
      }
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};

export default todo;
