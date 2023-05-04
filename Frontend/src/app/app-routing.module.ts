import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllEmpComponent } from './pages/view-all-emp/view-all-emp.component';
import { ViewSingleEmpComponent } from './pages/view-single-emp/view-single-emp.component';
import { CreateEmpComponent } from './pages/create-emp/create-emp.component';
import { EditEmpComponent } from './pages/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './pages/delete-emp/delete-emp.component';

const routes: Routes = [
   
  {path:'', component:HomeComponent},
  { path:'view-all-emp', component:ViewAllEmpComponent},
  { path:'view-emp', component:ViewSingleEmpComponent},
  {path: 'view-single-emp/:id', component: ViewSingleEmpComponent},
  {path:'create-emp', component:CreateEmpComponent},
  {path:'edit-emp', component:EditEmpComponent},
  {path:'delete-emp/:id', component:DeleteEmpComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'} //default page used if page doesn't exist

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
