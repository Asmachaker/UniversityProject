import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const apiUrl = '/api/enseignant';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<any>(`${apiUrl}/getAllEnseignant`);
    }

    getById(id) {
        return this.http.get<any>(`${apiUrl}/findEnseignant/${id}`);
    }

    save(obj) {
        return this.http.post<any>(`${apiUrl}/addEnseignant`, obj, {
            responseType: 'text' as 'json'
        });
    }

    delete(id) {
        return this.http.delete<any>(`${apiUrl}/deleteEnseignant/${id}`, {
            responseType: 'text' as 'json'
        });
    }
}
