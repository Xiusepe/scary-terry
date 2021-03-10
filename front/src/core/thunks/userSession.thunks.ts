import { AppThunk } from "../store/Store";

import { failed, requested, succeed } from "../store/user-session/userSessionSlice";
import { LogInData } from "../models/userSession.models";
import { postLogin } from "../services/userSession.services";

export const requestLogIn = (loginData: LogInData): AppThunk => async (dispatch: any) => {
  try {
    dispatch(requested());
    const { data } = await postLogin(loginData);
    sessionStorage.setItem('token', data.token);
    dispatch(succeed(data));
  } catch (e) {
    console.error(e);
    dispatch(failed(e.message));
  }
};