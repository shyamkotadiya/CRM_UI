import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuItems() {
    return [
      {
        menuName: "Client",
        menuId: "client",
        icon: "perm_identity",
        subMenu: [{
          menuName: "Create Client",
          menuId: "createClient",
          path: "/client/create",
        },
        {
          menuName: "Search Client",
          menuId: "searchClient",
          path: "/client/search"
        }
        ]
      },
      {
        menuName: "Project",
        menuId: "project",
        icon:"folder",
        subMenu: [{
          menuName: "Create Project",
          menuId: "createProject",
          path: "/project/create"
        },
        {
          menuName: "Search Project",
          menuId: "searchProject",
          path: "/project/search"
        }
        ]
      },
      {
        menuName: "Client Lead",
        menuId: "clientLead",
        icon:"person",
        subMenu: [{
          menuName: "Create Client Lead",
          menuId: "createClientLead",
          path: "/clientLead/create"
        },
        {
          menuName: "Search Client Lead",
          menuId: "searchClientLead",
          path: "/clientLead/search"
        }
        ]
      },
      {
        menuName: "Dashboard",
        menuId: "dashboard",
        icon: "dashboard",
        subMenu: [{
          menuName: "Client Communication Dashboard",
          menuId: "clientDashboard",
          path: "/dashboard/clientCommunication"
        },
        {
          menuName: "Design Dashboard",
          menuId: "designDashboard",
          path: ""
        }
        ]
      },
      
    ]
  }
}
