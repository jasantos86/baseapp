import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MainMenuService {
  constructor() {}

  menuItems = [
    {
      id: "users",
      title: "Users",
      type: "dropdown",
      submenus: [
        {
          title: "User List",
          routerLink: "/users"
        },
        {
          title: "User Manager",
          routerLink: "/users/manager"
        }
      ]
    },
    {
      id: "products",
      title: "Products",
      type: "dropdown",
      submenus: [
        {
          title: "Product List",
          routerLink: "/products/list"
        },
        {
          title: "Product Manager",
          routerLink: "/products/edit"
        }
      ]
    }
  ];
}
