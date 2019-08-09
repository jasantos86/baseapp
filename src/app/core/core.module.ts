import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './authentication/auth.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService]
})
export class CoreModule { 

  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   // Import guard
  //   if (parentModule) {
  //     throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
  //   }
  // }

}
