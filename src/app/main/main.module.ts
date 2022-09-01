import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {TableComponent} from "./components/table/table.component";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ExchangeService} from "./services/exchange.service";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {CardModule} from "primeng/card";
import {SelectButtonModule} from "primeng/selectbutton";



@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    ToastModule,
    CardModule,
    SelectButtonModule
  ],
  providers: [ExchangeService , DatePipe, MessageService ]
})
export class MainModule { }
