import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Importa configuraciones de aplicación y detección de cambios.

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })] // Configura la detección de cambios para mejorar el rendimiento.
};
