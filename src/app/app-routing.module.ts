import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: "users",
    loadChildren: () => import('./modules/users/users.module').then(mod => mod.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: "products",
    loadChildren: () => import('./modules/product_manager/productmgr.module').then(mod => mod.ProductMgrModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
