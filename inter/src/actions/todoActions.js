import * as types from '../constants/types';

export const createTodo = (value) => ({
  type: types.ADD_TODO,
  payload: value,
});

export const editTodo = (value) => ({
  type: types.EDIT_TODO,
  payload: value,
});

export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  payload: id,
});
