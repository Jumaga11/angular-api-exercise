import { Component } from '@angular/core'; // Importa Component de Angular.
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para solicitudes HTTP.
import { UserListComponent } from "./component/user-list/user-list.component"; // Importa el componente UserListComponent.

@Component({
  selector: 'app-root', // Define el selector del componente principal.
  standalone: true, // Indica que este componente es independiente.
  imports: [HttpClientModule, UserListComponent], // Importa módulos necesarios.
  templateUrl: './app.component.html', // Ruta del archivo de plantilla HTML.
  styleUrls: ['./app.component.css'] // Ruta del archivo de estilos CSS.
})
export class AppComponent {
  title = 'angular-api-exercise'; // Título de la aplicación.
}
