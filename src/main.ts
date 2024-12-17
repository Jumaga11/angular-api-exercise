import { bootstrapApplication } from '@angular/platform-browser'; // Importa la función para iniciar la aplicación.
import { AppComponent } from './app/app.component'; // Importa el componente principal de la aplicación.
import { importProvidersFrom } from '@angular/core'; // Importa la función para importar proveedores.
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule.

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)] // Proporciona HttpClientModule a la aplicación.
}).catch((error) => console.error(error)); // Maneja errores en el arranque de la aplicación.
