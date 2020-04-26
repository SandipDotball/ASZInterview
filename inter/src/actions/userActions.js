import * as types from '../constants/types';

export const createUser = (value) => ({
  type: types.ADD_USER,
  payload: value,
});

export const editUser = (value) => ({
  type: types.EDIT_USER,
  payload: value,
});

export const removeUser = (id) => ({
  type: types.REMOVE_USER,
  payload: id,
});
