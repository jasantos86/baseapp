import { AdminDetails } from './../models/firebase/users';
import { SetAuthData, ClearAuthAction } from './../store/auth/auth.actions';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserMeta } from '../models/firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { AuthenticationStateModel } from '../store/auth/auth.state';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: AuthenticationStateModel = {};

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: Store
  ) {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        const user$ = this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        const admin$ = this.afs.doc<AdminDetails>(`users/${user.uid}/admin/0`).valueChanges();
        const profile$ = combineLatest([user$, admin$]);
        profile$.pipe(
          map(([userDoc, adminDoc]) => {
            this.userProfile = {
              uid: userDoc.uid,
              enabled: adminDoc.enabled,
              firstName: userDoc.firstName,
              lastName: userDoc.lastName,
              displayName: userDoc.displayName,
              photoURL: userDoc.photoURL,
              email: user.email,
              roles: adminDoc.roles,
            };
            return this.userProfile;
          })
        ).subscribe(data => {
          return this.store.dispatch(new SetAuthData(data));
        });
      } else {
        this.store.dispatch(new ClearAuthAction());
      }
    });
  }

  getUserProfile() {
    return this.userProfile;
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    this.oAuthLogin(provider);
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  private oAuthLogin(provider) {
    try {
      this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          this.updateUserData(credential.user);
          this.store.dispatch(new Navigate(['/']));
        });
    } catch (error) {
      console.log('login error');
    }
  }

  private updateUserData(userdata) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userdata.uid}`);
    const meta: UserMeta = {
      lastLogin: userdata.metadata.lastSignInTime,
      docId: userdata.uid,
      createdBy: userdata.uid,
      createdDate: userdata.metadata.creationTime,
      lastModifiedBy: userdata.uid,
      lastModifiedDate: new Date()
    };
    const data: User = {
      uid: userdata.uid,
      displayName: userdata.displayName,
      photoURL: userdata.photoURL,
      meta
    };
    return userRef.set(data, { merge: true });
  }
}
