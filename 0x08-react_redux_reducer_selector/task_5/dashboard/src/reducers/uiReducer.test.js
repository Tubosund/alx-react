import uiReducer from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return initial state when no action is passed', () => {
    expect(uiReducer()).toEqual(initialState);
  });

  it('should not change state for an irrelevant action', () => {
    const currentState = { ...initialState, isNotificationDrawerVisible: true };
    const irrelevantAction = { type: 'SELECT_COURSE' };
    expect(uiReducer(currentState, irrelevantAction)).toEqual(currentState);
  });

  it('should display notification drawer on DISPLAY_NOTIFICATION_DRAWER action', () => {
    const expectedState = { ...initialState, isNotificationDrawerVisible: true };
    expect(uiReducer(initialState, actions.displayNotificationDrawer())).toEqual(
      expectedState
    );
  });

  it('should hide notification drawer on HIDE_NOTIFICATION_DRAWER action', () => {
    const currentState = { ...initialState, isNotificationDrawerVisible: true };
    const expectedState = { ...initialState, isNotificationDrawerVisible: false };
    expect(uiReducer(currentState, actions.hideNotificationDrawer())).toEqual(
      expectedState
    );
  });

  it('should update user info on LOGIN_SUCCESS action', () => {
    const user = { username: 'johndoe', email: 'johndoe@example.com' };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true,
      user,
    };
    expect(uiReducer(initialState, actions.loginSuccess(user))).toEqual(
      expectedState
    );
  });

  it('should reset user info on LOGIN_FAILURE and LOGOUT actions', () => {
    const currentState = {
      ...initialState,
      isUserLoggedIn: true,
      user: { username: 'janedoe' },
    };
    const expectedState = { ...initialState };

    expect(uiReducer(currentState, actions.loginFailure())).toEqual(
      expectedState
    );
    expect(uiReducer(currentState, actions.logout())).toEqual(expectedState);
  });
});
