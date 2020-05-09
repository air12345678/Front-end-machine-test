import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // {path: '', redirectTo: '/departments',pathMatch: 'full'}, 
  // {path: 'departments', component:DepartmentListComponent},
  // {path: 'employees', component:EmployeeListComponent},
  // {path: 'employee-detail',component:EmployeeDetailComponent},
  // {path:'departments/:id',component:DepartmentDetailComponent},
  // {path:'registerform',component:RegisterformComponent},
  // {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                   PageNotFoundComponent
             ]