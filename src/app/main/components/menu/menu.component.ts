import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  themes: MenuItem[] = [];
  selectedTheme: string =  'light-blue';
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Rates',
        icon: 'pi pi-fw pi-database',
        routerLink : '/list'

      },

    ];
    this.themes = [
      {label: 'LIGHT', icon: 'pi pi-sun', title: 'light-blue'},
      {label: 'DARK', icon: 'pi pi-moon' ,  title: 'dark-blue'},
    ]
  }

  switchTheme(event: { value: string} ) {
    this.selectedTheme = event.value;
    this.themeService.switchTheme(event.value);
  }
}
