import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewAllEmpComponent } from './components/view-all-emp/view-all-emp.component';
import { ViewSingleEmpComponent } from './components/view-single-emp/view-single-emp.component';
import { CreateEmpComponent } from './components/create-emp/create-emp.component';
import { EditEmpComponent } from './components/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './components/delete-emp/delete-emp.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path:'view-all-emp', component:ViewAllEmpComponent},
  { path:'view-emp', component:ViewSingleEmpComponent},
  {path:'create-emp', component:CreateEmpComponent},
  {path:'edit-emp', component:EditEmpComponent},
  {path:'delete-emp', component:DeleteEmpComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'} //default page used if page doesn't exist

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
