import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor (private http: HttpClient) {}

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.apiUrl).pipe(

      catchError((error) => {

        console.error('Error fetching users: ', error);
        return throwError(() => new Error('Error fetching users'));
        
      })
    );
  }
}
