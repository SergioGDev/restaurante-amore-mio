import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl: string = 'api/plato';

  constructor(private http: HttpClient) { }

  getMenuCompleto(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.menuUrl}`);
  }

  pathAssets: string = "../../../assets/";

  // getListadoMenu(): PlatoSchema[] {
  //   return [
  //     {
  //       nombre: "Surtido de quesos extremeños",
  //       submensaje: "miel y frutos secos",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Jamón ibérico",
  //       precio: 11,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Carrillada a la extremeña",
  //       precio: 12,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Solomillo de cerdo",
  //       submensaje: "roquefort, pimienta, almendra, mostaza o moscatel",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Gambones a la plancha",
  //       submensaje: "12 unidades",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Tomate aliñado con anchoas",
  //       precio: 7,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Ensalada de ahumados",
  //       precio: 10,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Ensalada de rulo de cabra",
  //       precio: 10,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Ensalada mixta",
  //       precio: 8,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Ensaladilla rusa",
  //       precio: 6,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Ensaladilla de gambas",
  //       precio: 8,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Surtido de ibéricos",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Jamón ibérico",
  //       precio: 11,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Lomo ibérico",
  //       precio: 11,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Surtido de quesos extremeños",
  //       submensaje: "Miel y frutos secos",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Croquetas de jamón",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Croquetas de merluza y gambas",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Patatas a las tres salsas",
  //       submensaje: "Roquefort, brabas, ali oli...",
  //       precio: 4,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Huevos rotos con jamón",
  //       precio: 7,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Consomé extremeño",
  //       precio: 3.50,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Sopa de marisco",
  //       precio: 7,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Gazpacho",
  //       precio: 4.5,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Salmorejo",
  //       precio: 4.5,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Revuelto de ajetes con gambas",
  //       precio: 10,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Revuelto de espárragos trigueros y gambas",
  //       submensaje: "Temporada",
  //       precio: 11,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Revuelto de criadillas",
  //       submensaje: "Temporada",
  //       precio: 11,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Revuelto de setas y jamón",
  //       precio: 10,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Carne al ajillo",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Carne con tomate",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Carne a la brasa",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Prueba de cerdo",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "San jacobo casero",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Secreto de cerdo ibérico",
  //       precio: 13,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Pluma de cerdo ibérico",
  //       precio: 13,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Codillo de cerdo",
  //       precio: 12,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Carrillada a la extremeña",
  //       precio: 11,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Solomillo de cerdo",
  //       submensaje: "Roquefort, pimienta, almendra, mostaza o moscatel",
  //       precio: 12,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Solomillo de cerdo ibérico",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Solomillo de ternera",
  //       precio: 18,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Chuletón de ternera",
  //       submensaje: "600 gr.",
  //       precio: 18,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Pechuga de pollo a la mostaza",
  //       precio: 10,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Brocheta de pollo y bacon",
  //       precio: 10,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Pollo en pepitoria",
  //       precio: 9,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Arroz negro",
  //       submensaje: "Con calamares, langostinos y ali oli",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Paella mixta",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Arroz caldoso de marisco",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Arroz con liebre",
  //       submensaje: "Temporada",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //     {
  //       nombre: "Risotto de pollo y verduras",
  //       precio: 14,
  //       pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Mariscada",
  //         submensaje: "Cuerpo, gambas y langostinos - por encargo",
  //         precio: 30,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Calamares a la romana",
  //         precio: 10,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Sepia a la plancha",
  //         precio: 11,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Bacalao a la dorada",
  //         precio: 9,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Bacalao a la nata",
  //         precio: 11,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Bacalao al horno",
  //         precio: 13,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Pulpo a la brasa",
  //         precio: 15,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Dorada asada con ensalada",
  //         precio: 12,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Atún a la plancha guarnecido",
  //         precio: 12,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Salmón a la plancha",
  //         precio: 12,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Gambones a la plancha",
  //         submensaje: "12 unidades",
  //         precio: 12,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Gambas al ajillo",
  //         precio: 10,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Las papas de María",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Flan de huevo de Carmen",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Coulant de chocolate con bola de helado heladino",
  //         precio: 4,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Serradura",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Arroz con leche",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Cremosito de limón",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Natillas caseras",
  //         precio: 3,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Sopa de mango con fruta natural y sorbete",
  //         precio: 5,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Tarta de fruta",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Peras al vino",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     },
  //       {
  //         nombre: "Tarta Wisky",
  //         precio: 3.50,
  //         pathFoto: this.pathAssets + "plato-generico.jpeg", idTipoPlato: 'prueba'
  //     }
  //     ];
  //   }

}
