// src/redux/reducers/userReducer.js

// Initial state
const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null
  };
  
  // Action types
  const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  const LOGIN_FAIL = 'LOGIN_FAIL';
  const LOGOUT = 'LOGOUT';
  
  // Reducer function
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false,
          error: null
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          loading: false,
          error: action.payload
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          loading: false,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  