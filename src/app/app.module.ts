import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllEmpComponent } from './pages/view-all-emp/view-all-emp.component';
import { ViewSingleEmpComponent } from './pages/view-single-emp/view-single-emp.component';
import { EditEmpComponent } from './pages/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './pages/delete-emp/delete-emp.component';
import { CreateEmpComponent } from './pages/create-emp/create-emp.component';
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
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
