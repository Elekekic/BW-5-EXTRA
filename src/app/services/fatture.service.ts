import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fatture } from '../interfaces/fatture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

   apiURL = 'http://localhost:8080/api/fatture'
   apifattureURL = 'http://localhost:8080/api/fattureByCliente'



  constructor(private http: HttpClient) { }

  getFatture(){
    return this.http.get<Fatture[]>(this.apiURL)
  }


  getFattureByClienteId(clienteId: number): Observable<Fatture[]> {
    const url = `${this.apifattureURL}/${clienteId}`;
    return this.http.get<Fatture[]>(url);
  }
}
