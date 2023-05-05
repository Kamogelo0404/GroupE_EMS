import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
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
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FilterPipe } from './filter.pipe';

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
    DeleteButtonComponent,
    CancelButtonComponent,
    SubmitButtonComponent,
    FilterPipe,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
