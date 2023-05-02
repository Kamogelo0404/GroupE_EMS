import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // TODO: change the url to the correct one used by api
  private url = "http://localhost:8080/api/employees";

  constructor(private http:HttpClient) { }
  
  getEmployeeById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  getAllEmployees(){
    return this.http.get<Employee[]>(`${this.url}`);
  }

  createEmployee(employee:Employee){
    return this.http.post(`${this.url}`, employee);
  }

  editEmployee(id:number, employee:Employee){
    return this.http.put(`${this.url}/${id}`, employee);
  }

  deleteEmployee(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
