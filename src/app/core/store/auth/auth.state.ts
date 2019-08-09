import { User, Roles } from '../../models/firebase/users';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetAuthData, LogOutAction, GoogleLoginAction, ClearAuthAction } from './auth.actions';
import { AuthService } from '../../authentication/auth.service';

export interface AuthenticationStateModel {
  uid?: string;
  enabled?: boolean;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  photoURL?: string;
  colorScheme?: string;
  email?: string;
  roles?: Roles;
}

@State<AuthenticationStateModel>({
  name: 'authStateModule',
  defaults: {
    uid: null,
    enabled: false,
    firstName: null,
    lastName: null,
    displayName: null,
    photoURL: null,
    colorScheme: null,
    email: null,
    roles: null,
  }
})
export class AuthState {

  constructor(private authService: AuthService) { }

  @Selector()
  public static profile(state: AuthenticationStateModel): AuthenticationStateModel {
    return {
      displayName: state.displayName,
      photoURL: state.photoURL
    };
  }

  @Action(SetAuthData)
  public setAuthData({ setState, getState }: StateContext<AuthenticationStateModel>, { payload }: SetAuthData) {
    console.log('SetAuthData ActionCalled');
    setState(payload);
  }

  @Action(ClearAuthAction)
  public clearAuthData({ setState }: StateContext<AuthenticationStateModel>) {
    console.log('ClearAuthData ActionCalled');
    setState({});
  }

  @Action(GoogleLoginAction)
  public async googleLogin({ setState, getState }: StateContext<AuthenticationStateModel>) {
    this.authService.googleLogin();
  }

  @Action(LogOutAction)
  public async logout({ setState }: StateContext<AuthenticationStateModel>) {
    this.authService.signOut();
    // .then(() => {
    //   setState({});
    // });
  }

}
