import { Injectable } from '@angular/core';
import { Vino } from '../interfaces/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class VinacotecaService {

  constructor() { }

  pathAssets: string = "../../../assets/";

  getBodegaEncinaBlanca(): Vino[] {
    return [
      {
        nombre: "Vino tinto Encina Blanca 9 Cepas de Alburquerque",
        mensaje: "Es un vino corpulento, de gran finura, que aúna la fruta fresca y sabrosa con taninos amables "
          + "y maderas en boca que lo convierte en un tinto capaz de satisfacer a los amantes de las variedades singulares.",
        precio: 17,
        pathFoto: this.pathAssets + "9-cepas-alburquerque.jpeg"
      },
      {
        nombre: "Vino verdejo Encina Blanca de Alburquerque",
        mensaje: "Único, sorprendente y completamente diferente a los vinos tradicionales de esta variedad. Fermentado lentamente, "
          + "redondeado con sus lías más finas, mimado para obtener su mejor versión.",
        precio: 15,
        pathFoto: this.pathAssets + "verdejo-encina-blanca-alburquerque.jpeg"
      },
      {
        nombre: "Vino blanco Encina Blanca de Alburquerque",
        mensaje: "La singularidad de este vino está reforzada por la diversidad de variedades autóctonas minoritarias que se "
          + "emplean en su elaboración y la complejidad sensorial que le aportan cada una de ellas.",
        precio: 5,
        pathFoto: this.pathAssets + "blanco-encina-blanca-alburquerque.png"
      },
      {
        nombre: "Vino espumoso Encina Blanca de Alburquerque",
        mensaje: "Suave, afrutado y dulce, sus finas y refrescantes burbujas llenarán de elegancia su mesa, "
          + "para vestirla de velada especial y única.",
        precio: 12,
        pathFoto: this.pathAssets + "espumoso-encina-blanca-alburquerque.jpeg"
      },
    ];
  }

  getExtremadura(): Vino[] {
    return[
      {
        nombre: "Vino tinto Alaude",
        mensaje: "Joven frutado y de gran frescura elaborado con uvas Tempranillo y Cabernet Sauvignon. Ideal para maridaje con carnes rojas y "
          + "pescados blancos y quesos, este vino te sorprenderá en la potencia de su paso afrutado y equilibrado.",
        precio: 12,
        pathFoto: this.pathAssets + "alaude.jpeg"
      },
      {
        nombre: "Vino tinto Habla del Silencio",
        mensaje: "En nariz ofrece aromas de frutos rojos y negros, acompañados por notas especiadas que recuerdan a la pimienta y "
          + "balsámicas como la menta. Es un vino sabroso, complejo y muy vivo.",
        precio: 16,
        pathFoto: this.pathAssets + "habla-del-silencio.jpeg"
      },
      {
        nombre: "Vino tinto Coloma Merlot",
        mensaje: "Complejo y elegante con aromas de ciruela, cereza, chocolate y confituras. Sabor intenso y aterciopelado, completado con "
          + "taninos dulces que hacen de este, un vino sabroso, suave y equilibrado.",
        precio: 18,
        pathFoto: this.pathAssets + "coloma-merlot.jpeg"
      }
    ];
  }

  getRiberaDelDuero(): Vino[] {
    return[
      {
        nombre: "Vino tinto Finca Resalso Roble",
        mensaje: "Tempranillo joven Ribera del Duero que destaca sobretodo por su versatilidad a la hora de maridad. "
          + "Puede maridar con carnes blancas, embutidos, cualquier aperitivo...",
        precio: 12,
        pathFoto: this.pathAssets + "finca-resalso.jpeg"
      },
      {
        nombre: "Vino tinto Martín Berdugo Roble",
        mensaje: "Ribera joven con punto extra de complejidad, este monovarietal de Tempranillo de Bodega y Viñedos "
          + "Martín Berdugo preserva todo su breve crianza en roble.",
        precio: 13,
        pathFoto: this.pathAssets + "martin-berdugo-roble.jpeg"
      },
      {
        nombre: "Vino tinto Pruno",
        mensaje: "Las variedades Tempranillo Cabernet sauvignon y el trabajo en bodega dan lugar a un tinto goloso, con adictivos "
          + "recuerdos de tofe, fruta madura y regaliz. Todo un caramelo para los aficionados a los tintos de la Ribera del Duero.",
        precio: 17,
        pathFoto: this.pathAssets + "pruno.jpeg"
      },
      {
        nombre: "Vino tinto Emilio Moro Crianza",
        mensaje: "Intenso y elegante con aromas de frutos negros maduros muy varietales seguidos de notas pulidas propias de su "
          + "crianza, especias y sutiles tostados. Conjunto complejo y elegante.",
        precio: 28,
        pathFoto: this.pathAssets + "emilio-moro-crianza.jpeg"
      },
      {
        nombre: "Vino tinto Pago de los Capellares Crianza",
        mensaje: "Con aromas de fruta roja madura, toques balsámicos. Su paso por boca es suave, llenando el paladar de exquisitos "
          + "sabores a ciruela y arándano, con un final largo y elegante. Destaca su equilibrio y acidez viva.",
        precio: 39,
        pathFoto: this.pathAssets + "pago-capellares-criaz.jpeg"
      },
      {
        nombre: "Vino tinto PSI de Pingus",
        mensaje: "Un tinto fresco, con mucho sabor a fruta, de la mano del conocido ingeniero agrónomo y enólogo Peter Sisseck. Proviene de "
          + "cepas viejas de una edad media de más de 30 años cultivadas en microparcelas de la pequeña bodega Dominio de Pingus.",
        precio: 68,
        pathFoto: this.pathAssets + "psi-pingus.jpeg"
      }
    ];
  }

  getRioja(): Vino[] {
    return[
      {
        nombre: "Vino tinto Luis Cañas Crianza",
        mensaje: "En boca es amplio y carnoso, encontramos un vino con volumenn y buen equilibrio. Final con nervio, elegante y afrutado, "
          + "con una tanicidad que nos hace salivar reclamándonos otro trago.",
        precio: 17,
        pathFoto: this.pathAssets + "luis-canas-crianza.jpeg"
      }
    ];
  }

  getOtrasDenominaciones(): Vino[] {
    return[
      {
        nombre: "Vino tinto Flor de Vetus (Toro)",
        mensaje: "La fruta es más oscura y hay más tanino, pero también hay buena frescura y equilibrio, y termina muy sabroso, "
          + "con un toque casi salado. Persistente final agradable.",
        precio: 13,
        pathFoto: this.pathAssets + "flor-vetus-toro.png"
      },
      {
        nombre: "Vino tinto Senda de las Moradas (Madrid)",
        mensaje: "Garnacha muy varietal con aromas florales, de ciruela y monte bajo sobre un fondo muy mineral, característico del "
          + "suelo granítico. Prevalece la variedad sobre una sutil madera.",
        precio: 15,
        pathFoto: this.pathAssets + "senda-moradas-madrid.jpeg"
      },
      {
        nombre: "Vino tinto Portugués Carlos Reynolds",
        mensaje: "El aroma presenta frutas frescas en un perfecto casamiento con la madera, que revelan en la boca con taninos "
          + "finos y elegantes, en un conjunto de larga y agradable persistencia.",
        precio: 16,
        pathFoto: this.pathAssets + "portugues-carlos-reynolds.jpeg"
      },
      {
        nombre: "Vino tinto Tres Picos (Campo de Borja)",
        mensaje: "Su buena concentración aromática, con fruta roja y matices florales en primer plano, lo convierten en un excellente "
          + "ejemplar de la mejor Garnacha aragonesa.",
        precio: 24,
        pathFoto: this.pathAssets + "tres-picos-campo-borja.jpeg"
      }
    ];
  }

  getBlancosVerdejosAlbarinnos(): Vino[] {
    return[
      {
        nombre: "Vino blanco Dulce Eva (Extremadura)",
        mensaje: "Aporta matices frutales, como e pomelo, la manzana asada y tropicales: también florales, como el geranio. "
          + "Tiene nun paso muy agradable, dulce pero no dulzón, ni empalagoso. Deja un buen recuerdo frutal.",
        precio: 6,
        pathFoto: this.pathAssets + "dulce-eva.jpeg"
      },
      {
        nombre: "Vino blanco Godello Sonrisa de Tares",
        mensaje: "Godello muy fresco y varietal que cautivará a los aficionados a los blancos. Notas aromáticas de cítricos, "
          + "manzana verde, nectarina, flores blancas. Un paso por boca refrescante y persistente.",
        precio: 13,
        pathFoto: this.pathAssets + "godello-sonrisa-tares.jpeg"
      },
      {
        nombre: "Vino blanco Protos (Rueda)",
        mensaje: "En boca es un vino seco, con una acidez natural moderada y equilibrada que le da frescura y alegría en boca. "
          + "La crianza sobre lías finas aportan en boca redondez, cuerpo y una buena estructura.",
        precio: 11,
        pathFoto: this.pathAssets + "protos-rueda.jpeg"
      },
      {
        nombre: "Vino blanco Naia (Rueda)",
        mensaje: "Potente y sabroso. Vino muy frutal, con una frescura equilibrada y un largo posgusto en el que reaparecen "
          + "amplificados todos estos matices. Un vino complejo, elegante y muy equilibrado.",
        precio: 14,
        pathFoto: this.pathAssets + "naia-rueda.jpeg"
      },
      {
        nombre: "Vino blanco Albariño Santiago Ruíz 2019",
        mensaje: "Santiago Ruíz es uno de esos albariños que no pueden escapar a la atención de cualquier aficionado a los blancos "
          + "gallegos al estar elaborado por uno de los considerados padres de la variedad reina de Rías Baixas.",
        precio: 19,
        pathFoto: this.pathAssets + "albarinno-santiago-ruiz.jpeg"
      }
    ];
  }

  getEspumososSobremesa(): Vino[] {
    return[
      {
        nombre: "Cava Agusti Torello Brut Reserva",
        mensaje: "Destaca por sus notas frescas y afrutadas. Conjuga el carácter de las tres variedades típicas con la tipicidad "
          + "de unas viñas de más de 30 años.",
        precio: 17,
        pathFoto: this.pathAssets + "agusti-torello-brut-reserva.jpeg"
      },
      {
        nombre: "Vino sobremesa Naranja Oliveros",
        mensaje: "Aroma espectacular con una profunda reminiscencia de naranja, café y notas tostadas. Increíble final balsámico. "
          + "Color caoba muy oscuro debido a la oxidación en barricas de roble americano.",
        precio: 16,
        pathFoto: this.pathAssets + "naranja-oliveros.jpg"
      }
    ];
  }

  getVinosDelPaseante(): Vino[] {
    return[
      {
        nombre: "Vino tinto (Mencía) La Escucha 2018",
        mensaje: "En las tierras empinadas de oscura pizarra, las viñas acogen una viticultura íntima y esmerada. "
          + "La sabiduría capaz de conservar la magia de los vinos de Mencía. Aroma intenso, taninos sedosos y agradable frescor.",
        precio: 14,
        pathFoto: this.pathAssets + "mencia-la-escucha.png"
      },
      {
        nombre: "Vino blanco (Verdejo) La Charla 2020",
        mensaje: "Sobre la tierra pedregosa se extiende un mar de viñedos de Verdejo. Tersas, doradas, sus uvas ofrecen la armonía del aroma "
          + "a fruta madura, y ligeras notas de frescor verde anisado.",
        precio: 10,
        pathFoto: this.pathAssets + "verdejo-la-charla.jpeg"
      },
      {
        nombre: "Vino blanco (Godello) La Duda 2020",
        mensaje: "Por su elegancia, La Duda combina my bien con todo tipo de pescados y mariscos. Con ensaladas tibias y quesos cremosos. También "
          + "es un buen acompañante de arroces con pescado y de tapeo gastronómico.",
        precio: 13,
        pathFoto: this.pathAssets + "godello-la-duda.jpeg"
      },
      {
        nombre: "Vino tinto (Garnacha) El Pispa 2019",
        mensaje: "Vivo y sabroso, Vinos del Paseante - El pispa es un vino tinto con un perfecto equilibrio de fruta madura, toques "
          + "minerales y notas de torrefacción.",
        precio: 12,
        pathFoto: this.pathAssets + "garnacha-el-pispa.jpeg"
      }
    ];
  }
}
