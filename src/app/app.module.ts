import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAllEmpComponent } from './components/view-all-emp/view-all-emp.component';
import { ViewSingleEmpComponent } from './components/view-single-emp/view-single-emp.component';
import { EditEmpComponent } from './components/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './components/delete-emp/delete-emp.component';
import { CreateEmpComponent } from './components/create-emp/create-emp.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAllEmpComponent,
    ViewSingleEmpComponent,
    EditEmpComponent,
    DeleteEmpComponent,
    CreateEmpComponent,
    HeaderComponent,
    EmployeeFormComponent,
    BackButtonComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
