import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users           : User[] = []; // Arreglo para almacenar los usuarios.
  errorMessage    : string = ''; // Mensaje de error.
  httpErrorMessage: string = ''; // Mensaje de error HTTP.
  searchTerm      : string = ''; // Término de búsqueda.

  constructor(private userService: UserService) {} // Inyecta UserService en el constructor.

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Método para cargar usuarios desde el servicio.
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data.sort((a, b) => a.name.localeCompare(b.name)); // Asigna y ordena los datos obtenidos al arreglo de usuarios.
      },
      error: (error) => {
        this.httpErrorMessage = 'Error al conectar con el servidor. Por favor, inténtelo de nuevo más tarde.'; // Asigna el mensaje de error HTTP.
      },
    });
  }

  get filteredUsers() {
    // Método para filtrar usuarios según el término de búsqueda.
    const filtered = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (filtered.length === 0 && this.searchTerm.trim() !== '') {
      this.errorMessage = 'Error, usuario no existe'; // Asigna un mensaje de error si no hay coincidencias.
    } else {
      this.errorMessage = ''; // Limpia el mensaje de error si hay coincidencias.
    }
    return filtered; // Retorna el arreglo filtrado.
  }

  closeModal() {
    // Método para cerrar el modal de error.
    this.httpErrorMessage = '';
  }
}



