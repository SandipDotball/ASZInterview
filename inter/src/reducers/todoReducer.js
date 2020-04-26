import * as types from '../constants/types';

const INITIALSTATE = {
  todos: [],
  loading: true,
};
const todoReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case types.EDIT_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((u) => {
          if (u.key === action.payload.key) {
            return Object.assign({}, u, {
              ...action.payload,
            });
          }
          return u;
        }),
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => action.payload !== todo.key),
      };
    default:
      return state;
  }
};

export default todoReducer;
