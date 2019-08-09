import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LogOutAction } from 'src/app/core/store/auth/auth.actions';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new LogOutAction()).subscribe(() => {
      this.store.dispatch(new Navigate(['/auth/login']));
    });
  }

}
