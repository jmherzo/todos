const byId = (state = {}, action) => {
  if(action.response){
    return {...state, ...action.response.entities.todos};
  }
  return state;
};

export default byId;

// getTodo selector
export const getTodo = (state, id) => state[id];