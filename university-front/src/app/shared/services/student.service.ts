import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

const apiUrl = '/api/etudiant';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<any>(`${apiUrl}/getAllEtudiant`);
    }

    getById(id) {
        return this.http.get<any>(`${apiUrl}/findEtudiant/${id}`);
    }

    save(obj) {
        return this.http.post<any>(`${apiUrl}/addEtudiant`, obj,{
            responseType: 'text' as 'json'
        });
    }

    delete(id) {
        return this.http.delete<any>(`${apiUrl}/deleteEtudiant/${id}`, {
            responseType: 'text' as 'json'
        });
    }
}
