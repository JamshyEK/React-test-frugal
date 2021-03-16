import { ADD_CATS, CATS_ERROR, CATS_LOADING } from "./actionType";


export const addCats = (cats) => ({
  type: ADD_CATS,
  payload: {
    cats: cats,
  },
});

export const loadingCats = () => ({
  type: CATS_LOADING,
});

export const ErrorCats = (error) => ({
  type: CATS_ERROR,
  payload: {
    error: error,
  },
});
