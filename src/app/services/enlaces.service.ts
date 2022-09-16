import { Injectable } from '@angular/core';
import { RedSocial, Option } from '../interfaces/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {

  constructor() { }

  pathAssets: string = "../../../assets/";

  getOpciones(): Option[] {
    return [
      { text: 'Inicio', path: '/inicio' },
      { text: 'Menú', path: '/menu' },
      { text: 'Vinacoteca', path: '/vinacoteca' },
      // { text: 'Galería', path: '/galeria' },
      { text: 'Contacto', path: '/contacto' }
    ];
  }

  getEnlacesLegales(): Option[] {
    return [
      { text: 'Aviso legal', path: '/aviso-legal' },
      { text: 'Política de privacidad', path: '/politica-privacidad' },
      { text: 'Política de cookies', path: '/politica-cookies' },
    ];
  }

  getOpcionesConfiguracion(): Option[] {
    return [
      { text: 'Inicio', path: '/dashboard/configuracion-inicio', icono: 'home' },
      { text: 'Menú', path: '/dashboard/configuracion-menu', icono: 'restaurant' },
      { text: 'Vinacoteca', path: '/dashboard/configuracion-vinacoteca', icono: 'local_drink' },
      // { text: 'Galería', path: '/dashboard/configuracion-galeria', icono: 'photos' },
      { text: 'Contacto', path: '/dashboard/configuarcion-contacto', icono: 'contact_mail' },
      { text: 'Logout', path: '/inicio', icono: 'highlight_off' },
    ]
  }
 
  getRedesSociales(): RedSocial[] {
    return [
      {
        title: "Facebook",
        src: "https://www.facebook.com/",
        path: this.pathAssets + "facebook-blanco.svg",
        pathNegro: this.pathAssets + "facebook-negro.svg",
        pathHover: this.pathAssets + "facebook-dorado.svg",
        pathUsed: this.pathAssets + "facebook-blanco.svg",
        pathResponsive: this.pathAssets + "facebook-negro.svg"
      },
      // {
      //   title: "Instagram",
      //   path: this.pathAssets + "instagram-blanco.svg",
      //   pathNegro: this.pathAssets + "instagram-negro.svg",
      //   pathHover: this.pathAssets + "instagram-dorado.svg",
      //   pathUsed: this.pathAssets + "instagram-blanco.svg",
      //   pathResponsive: this.pathAssets + "instagram-negro.svg"
      // },
      // {
      //   title: "Twitter",
      //   path: this.pathAssets + "twitter-blanco.svg",
      //   pathNegro: this.pathAssets + "twitter-negro.svg",
      //   pathHover: this.pathAssets + "twitter-dorado.svg",
      //   pathUsed: this.pathAssets + "twitter-blanco.svg",
      //   pathResponsive: this.pathAssets + "twitter-negro.svg"
      // },
      {
        title: "TripAdvisor",
        src: "https://www.tripadvisor.com/",
        path: this.pathAssets + "tripadvisor-blanco.svg",
        pathNegro: this.pathAssets + "tripadvisor-negro.svg",
        pathHover: this.pathAssets + "tripadvisor-dorado.svg",
        pathUsed: this.pathAssets + "tripadvisor-blanco.svg",
        pathResponsive: this.pathAssets + "tripadvisor-negro.svg"
      },
      {
        title: "Email",
        src: "mailto:info@restauranteam.com",
        path: this.pathAssets + "email-blanco.svg",
        pathNegro: this.pathAssets + "email-negro.svg",
        pathHover: this.pathAssets + "email-dorado.svg",
        pathUsed: this.pathAssets + "email-blanco.svg",
        pathResponsive: this.pathAssets + "email-negro.svg"
      },
      {
        title: "Teléfono",
        src: "XXXXXXXXX",
        path: this.pathAssets + "llamada-telefonica-blanco.svg",
        pathNegro: this.pathAssets + "llamada-telefonica-negro.svg",
        pathHover: this.pathAssets + "llamada-telefonica-dorado.svg",
        pathUsed: this.pathAssets + "llamada-telefonica-blanco.svg",
        pathResponsive: this.pathAssets + "llamada-telefonica-negro.svg"
      }
    ];
  }

}
