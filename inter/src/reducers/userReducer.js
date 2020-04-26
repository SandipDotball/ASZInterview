import * as types from '../constants/types';

const INITIALSTATE = {
  users: [],
  loading: true,
};
const userReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };
    case types.EDIT_USER:
      return {
        ...state,
        loading: false,
        users: state.users.map((u) => {
          if (u.key === action.payload.key) {
            return Object.assign({}, u, {
              ...action.payload,
            });
          }
          return u;
        }),
      };
    case types.REMOVE_USER:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => action.payload !== user.key),
      };
    default:
      return state;
  }
};

export default userReducer;
