import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/login/login';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public showMenu: string;

  navItems: MenuItem[] = JSON.parse(localStorage.getItem('menuItem'));
  constructor() {}

  ngOnInit() {
    this.showMenu = '';
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
}
