import {
  DEL_USER,
  ADD_USERS,
  USERS_LOADING,
  USERS_ERROR,
  GET_USERS,
} from "./actionType";

const UserReducer = (
  state = { userLoading: true, userErr: null, user: [] },
  action
) => {
  switch (action.type) {
    case DEL_USER:
      state.user.splice(action.payload.id,1)
      return {
        ...state,
        userLoading: false,
        userErr: null,
        user:state.user
       // user: state.user.filter((x) => x.id != action.payload.id),
      };
    case GET_USERS:
      return {
        ...state,
        userLoading: false,
        userErr: null,
        user: state.user,
      };
    case USERS_ERROR:
      return {
        ...state,
        userLoading: false,
        userErr: action.payload.error,
        user: [],
      };
    case USERS_LOADING:
      return {
        ...state,
        userLoading: true,
        userErr: null,
        user: [],
      };
    case ADD_USERS:
      return {
        ...state,
        userLoading: false,
        userErr: null,
        user: state.user.concat(action.payload.user),
      };

    default:
      return state;
  }
};

export default UserReducer;
