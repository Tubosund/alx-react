// Initial state
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

// Reducer function
function uiReducer(state = initialState, action) {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case 'HIDE_NOTIFICATION_DRAWER':
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.payload,
      };
    case 'LOGIN_FAILURE':
    case 'LOGOUT':
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}

export default uiReducer;
