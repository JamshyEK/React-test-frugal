import {
    DOGS_LOADING,
    DOGS_ERROR,
    ADD_DOGS,
  } from "./actionType";
  
  const DogReducer = (
    state = { dogLoading: true, dogErr: null, dog: [] },
    action
  ) => {
    switch (action.type) {
      case ADD_DOGS:
        return {
          ...state,
          dogLoading: false,
          dogErr: null,
          dog: action.payload.dogs,
        };
      case DOGS_ERROR:
        return {
          ...state,
          dogLoading: false,
          dogErr: action.payload.error,
          dog: [],
        };
      case DOGS_LOADING:
        return {
           ...state, 
           dogLoading: true, 
           dogErr: null, 
           dog: [] 
          };
     
      default:
        return state;
    }
  };
  
  export default DogReducer;
  