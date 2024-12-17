import { Injectable } from '@angular/core'; // Importa el decorador Injectable de Angular.
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer solicitudes HTTP.
import { Observable, catchError, throwError } from 'rxjs'; // Importa operadores y clases de RxJS.
import { User } from '../models/user.model'; // Importa la interfaz User.

@Injectable({
  providedIn: 'root' // Declara que este servicio está disponible en toda la aplicación.
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL de la API.

  constructor(private http: HttpClient) {} // Inyecta HttpClient en el constructor.

  getUsers(): Observable<User[]> {
    // Método para obtener usuarios desde la API.
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Maneja errores en la solicitud HTTP.
        console.table('Error fetching users: ', error);
        return throwError(() => new Error('Error fetching users'));
      })
    );
  }
}
