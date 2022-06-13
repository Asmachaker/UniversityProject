import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const apiUrl = '/api/cours';

@Injectable({
    providedIn: 'root'
})
export class CoursService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<any>(`${apiUrl}/getAllCours`);
    }

    getById(id) {
        return this.http.get<any>(`${apiUrl}/findCours/${id}`);
    }

    save(obj) {
        return this.http.post<any>(`${apiUrl}/addCours`, obj, {
            responseType: 'text' as 'json'
        });
    }

    delete(id) {
        return this.http.delete<any>(`${apiUrl}/deleteCours/${id}`, {
            responseType: 'text' as 'json'
        });
    }
}
