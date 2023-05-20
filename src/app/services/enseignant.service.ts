import { Injectable } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { University } from '../model/university.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  apiURL: string = 'http://localhost:8083/teachers/api';
  apiUniv: string = 'http://localhost:8083/teachers/api/univ';

  constructor(private http: HttpClient) {}

  listeEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiURL);
  }

  ajouterenseignant(ens: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.apiURL, ens, httpOptions);
  }

  supprimerEnseignant(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterEnseignant(id: number): Observable<Enseignant> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Enseignant>(url);
  }

  // updateEnseignant(e: Enseignant): Observable<Enseignant> {
  //   const url = `${this.apiURL}/${e.idEnseignant}`;
  //   return this.http.put<Enseignant>(url, e, httpOptions);
  // }
  

  updateEnseignant(v:Enseignant) : Observable<Enseignant>{
    return this.http.put<Enseignant>(this.apiURL, v, httpOptions);
  }
  
  
  
  listeUniversities(): Observable<University[]> {
    return this.http.get<University[]>(`${this.apiURL}/univ`);
  }

  rechercherParUniversity(idUniversity: number):Observable< Enseignant[]> {
    const url = `${this.apiURL}/ensuniv/${idUniversity}`;
    return this.http.get<Enseignant[]>(url);
    }
    
  rechercherParNomEns(nom: string):Observable< Enseignant[]> {
      const url = `${this.apiURL}/ensByName/${nom}`;
      return this.http.get<Enseignant[]>(url);
      }

      ajouterUniversity( u: University):Observable<University>{
        return this.http.post<University>(this.apiUniv, u, httpOptions);
        }
        
}


