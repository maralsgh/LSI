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
  selectedTheme: string = 'LIGHT';
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
      {label: 'LIGHT', icon: 'pi pi-sun'},
      {label: 'DARK', icon: 'pi pi-moon'},
    ]
  }

  switchTheme(event: { value: string }) {
    if(event.value == 'DARK'){
      this.themeService.switchTheme('dark-blue')
    }else if(event.value == 'LIGHT'){
      this.themeService.switchTheme('light-blue')
    }

  }
}
