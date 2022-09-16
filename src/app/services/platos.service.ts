import { Injectable } from '@angular/core';
import { Plato } from '../interfaces/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  pathAssets: string = "../../../assets/";

  getFavoritosChef(): Plato[] {
    return [
      {
        nombre: "Surtido de quesos extremeños",
        submensaje: "miel y frutos secos",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Jamón ibérico",
        precio: 11,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Carrillada a la extremeña",
        precio: 12,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Solomillo de cerdo",
        submensaje: "roquefort, pimienta, almendra, mostaza o moscatel",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Gambones a la plancha",
        submensaje: "12 unidades",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      }
    ]
  };

  getEntrantes(): Plato[] {
    return [
      {
        nombre: "Tomate aliñado con anchoas",
        precio: 7,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Ensalada de ahumados",
        precio: 10,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Ensalada de rulo de cabra",
        precio: 10,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Ensalada mixta",
        precio: 8,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Ensaladilla rusa",
        precio: 6,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Ensaladilla de gambas",
        precio: 8,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Surtido de ibéricos",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Jamón ibérico",
        precio: 11,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Lomo ibérico",
        precio: 11,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Surtido de quesos extremeños",
        submensaje: "Miel y frutos secos",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Croquetas de jamón",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Croquetas de merluza y gambas",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Patatas a las tres salsas",
        submensaje: "Roquefort, brabas, ali oli...",
        precio: 4,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Huevos rotos con jamón",
        precio: 7,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Consomé extremeño",
        precio: 3.50,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Sopa de marisco",
        precio: 7,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Gazpacho",
        precio: 4.5,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Salmorejo",
        precio: 4.5,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Revuelto de ajetes con gambas",
        precio: 10,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Revuelto de espárragos trigueros y gambas",
        submensaje: "Temporada",
        precio: 11,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Revuelto de criadillas",
        submensaje: "Temporada",
        precio: 11,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Revuelto de setas y jamón",
        precio: 10,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      }
    ];
  }

  getCarnes(): Plato[] {
    return [
      {
        nombre: "Carne al ajillo",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Carne con tomate",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Carne a la brasa",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Prueba de cerdo",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "San jacobo casero",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Secreto de cerdo ibérico",
        precio: 13,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Pluma de cerdo ibérico",
        precio: 13,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Codillo de cerdo",
        precio: 12,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Carrillada a la extremeña",
        precio: 11,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Solomillo de cerdo",
        submensaje: "Roquefort, pimienta, almendra, mostaza o moscatel",
        precio: 12,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Solomillo de cerdo ibérico",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Solomillo de ternera",
        precio: 18,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Chuletón de ternera",
        submensaje: "600 gr.",
        precio: 18,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Pechuga de pollo a la mostaza",
        precio: 10,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Brocheta de pollo y bacon",
        precio: 10,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Pollo en pepitoria",
        precio: 9,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      }
    ];
  }

  getArroces(): Plato[] {
    return [
      {
        nombre: "Arroz negro",
        submensaje: "Con calamares, langostinos y ali oli",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Paella mixta",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Arroz caldoso de marisco",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Arroz con liebre",
        submensaje: "Temporada",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      },
      {
        nombre: "Risotto de pollo y verduras",
        precio: 14,
        pathFoto: this.pathAssets + "plato-generico.jpeg"
      }
    ];
  }

    getPescados(): Plato[] {
      return [
        {
          nombre: "Mariscada",
          submensaje: "Cuerpo, gambas y langostinos - por encargo",
          precio: 30,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Calamares a la romana",
          precio: 10,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Sepia a la plancha",
          precio: 11,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Bacalao a la dorada",
          precio: 9,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Bacalao a la nata",
          precio: 11,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Bacalao al horno",
          precio: 13,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Pulpo a la brasa",
          precio: 15,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Dorada asada con ensalada",
          precio: 12,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Atún a la plancha guarnecido",
          precio: 12,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Salmón a la plancha",
          precio: 12,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Gambones a la plancha",
          submensaje: "12 unidades",
          precio: 12,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Gambas al ajillo",
          precio: 10,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        }
      ];
    }

    getPostres(): Plato[] {
      return [
        {
          nombre: "Las papas de María",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Flan de huevo de Carmen",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Coulant de chocolate con bola de helado heladino",
          precio: 4,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Serradura",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Arroz con leche",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Cremosito de limón",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Natillas caseras",
          precio: 3,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Sopa de mango con fruta natural y sorbete",
          precio: 5,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Tarta de fruta",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Peras al vino",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        },
        {
          nombre: "Tarta Wisky",
          precio: 3.50,
          pathFoto: this.pathAssets + "plato-generico.jpeg"
        }
      ];
    }

    
}
