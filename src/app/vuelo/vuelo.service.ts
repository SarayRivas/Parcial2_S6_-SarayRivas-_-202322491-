import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Vuelo } from 'vuelo';

@Injectable({
  providedIn: 'root'
})
export class vueloService {
  private apiUrl: string = environment.baseUrl; 
constructor(private http: HttpClient) { }
getVuelos(): Observable<Vuelo[]> {
  return this.http.get<Vuelo[]>(this.apiUrl);
}

}
