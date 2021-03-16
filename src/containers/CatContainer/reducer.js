import {
    ADD_CATS,
    CATS_ERROR,
    CATS_LOADING,
  } from "./actionType";
  
  const CatReducer = (
    state = { catLoading: true, catErr: null, cat: [] },
    action
  ) => {
    switch (action.type) {
      case ADD_CATS:
        return {
          ...state,
          catLoading: false,
          catErr: null,
          cat: action.payload.cats,
        };
      case CATS_ERROR:
        return {
          ...state,
          catLoading: false,
          catErr: action.payload.error,
          cat: [],
        };
      case CATS_LOADING:
        return {
           ...state, 
           catLoading: true, 
           catErr: null, 
           cat: [] 
          };
     
      default:
        return state;
    }
  };
  
  export default CatReducer;
  