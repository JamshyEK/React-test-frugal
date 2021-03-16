import { DEL_USER,ADD_USERS,GET_USERS,USERS_ERROR,USERS_LOADING } from "./actionType";





export const getUsers = () => ({
  type: GET_USERS,
});

export const loadingUsers = () => ({
  type: USERS_LOADING,
});

export const ErrorUsers = (error) => ({
  type: USERS_ERROR,
  payload: {
    error: error,
  },
});



export const addUsers = (user) => ({
  type: ADD_USERS,
  payload: {
    user: user,
  },
});

export const delUsers = (id) => ({
  type: DEL_USER,
  payload: {
    id: id,
  },
});
