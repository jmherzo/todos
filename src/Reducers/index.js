import { combineReducers } from "redux";
import byId, * as fromByID from './byId';
import createList, * as fromCreateList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const todos = combineReducers({
  byId,
  listByFilter
});
export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromCreateList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromByID.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromCreateList.getIsFetching(state.listByFilter[filter]);