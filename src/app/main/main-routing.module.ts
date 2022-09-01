import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {TableComponent} from "./components/table/table.component";

const routes: Routes = [
  {path: '' , component: LayoutComponent ,
    children:[
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
      {path: 'list' , component: TableComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
