import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "../Actions/auth";

const initialstate = {
  user: null,
  isFetching: false,
  loginError: false,
  registerError: false,
  token: null,
};

export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        user: null,
        isFetching: true,
        loginError: false,
        token: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        user: action.payload.newUser,
        isFetching: false,
        loginError: false,
        token: action.payload.accessToken,
      };
    }
    case LOGIN_FAILURE: {
      return {
        user: null,
        isFetching: false,
        loginError: true,
        token: null,
      };
    }
    case LOGOUT: {
      return {
        user: null,
        isFetching: false,
        loginError: false,
        token: null,
      };
    }
    case SIGNUP_START: {
      return {
        user: null,
        isFetching: true,
        loginError: false,
        registerError: false,
        token: null,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        user: null,
        isFetching: false,
        loginError: false,
        registerError: false,
        token: null,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        user: null,
        isFetching: false,
        loginError: true,
        registerError: true,
        token: null,
      };
    }
    default:
      return state;
  }
};
