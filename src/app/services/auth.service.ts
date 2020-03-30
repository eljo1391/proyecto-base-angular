import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Injectable({
    providedIn:"root"
})

export class AuthService{
    constructor (private http: HttpClient){}

    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json"
    });

    registerUser(name: string, email: string, password: string){
        const url_api = 'http://127.0.0.1:4200/api/employee/agregar';
        return this.http.put(url_api, {
            name: name,
             email:email, 
             password: password
            });
    }
}