// import { AuthService } from './../../../../core/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GoogleLoginAction } from 'src/app/core/store/auth/auth.actions';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    // public auth: AuthService
    private store: Store
    ) { }

  ngOnInit() {
  }

  googleLogin() {
    this.store.dispatch(new GoogleLoginAction());
  }
}
