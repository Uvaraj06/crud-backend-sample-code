import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private _http: HttpClient) { }

  // connect to frontend to backend

  apiurl = 'http://localhost:3000/sample'

  // get all data

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiurl}`);
  }

  // / create Data
  createData(data: any): Observable<any> {
    console.log(data, 'createapi==>')
    return this._http.post(`${this.apiurl}`, data);
  }

  // delete data
  deleteData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiurl}/${ids}`)
  }

// update data
  updateData(data:any,id:any):Observable<any>
  {
    let ids = id;
    return this._http.put(`${this.apiurl}/${ids}`,data)
  }

  // get single data
  
  getSingleData(id:any):Observable<any>{
    let ids = id ;
    return this._http.get(`${this.apiurl}/${ids}`)
  }
}
