import { AuthState, AuthenticationStateModel } from './../../../store/auth/auth.state';
import { Router } from '@angular/router';
import { AuthService } from './../../../authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { Select, State } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  @Select(AuthState.profile) profile$: Observable<any>;

  constructor() { }

  ngOnInit() {
  }



}
