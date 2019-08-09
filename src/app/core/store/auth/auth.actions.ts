import { User } from '../../models/firebase';
import { AuthenticationStateModel } from './auth.state';

export class SetAuthData {
  public static readonly type = '[Auth] Auth data';
  constructor(public payload: AuthenticationStateModel) {}
}

export class GoogleLoginAction {
  public static readonly type = '[Auth] Google login';
}

export class ClearAuthAction {
  public static readonly type = '[Auth] Clear Auth';
  constructor() {}
}

export class LogOutAction {
  public static readonly type = '[Auth] Logout action';
  constructor() {}
}
