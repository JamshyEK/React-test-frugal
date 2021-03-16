import { ADD_DOGS, DOGS_ERROR, DOGS_LOADING } from "./actionType";

// export function storeDetail() {
//     return {
//         type: FETCH_STOREDETAILS_INIT_ACTION
//     }
// }

export const addDogs = (dogs) => ({
  type: ADD_DOGS,
  payload: {
    dogs: dogs,
  },
});

export const loadingDogs = () => ({
  type: DOGS_LOADING,
});

export const ErrorDogs = (error) => ({
  type: DOGS_ERROR,
  payload: {
    error: error,
  },
});
