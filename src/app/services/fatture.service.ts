import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fatture } from '../interfaces/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

   apiURL = 'http://localhost:8080/api/fatture'

  constructor(private http: HttpClient) { }

  getFatture(){
    return this.http.get<Fatture[]>(this.apiURL)
  }
}
