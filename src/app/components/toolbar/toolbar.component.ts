import { Component, HostListener } from '@angular/core';
import { Option, RedSocial } from 'src/app/interfaces/restaurante.interface';
import { EnlacesService } from '../../services/enlaces.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservaModalComponent } from '../reserva-modal/reserva-modal.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(
    private enlacesService: EnlacesService,
    private dialog: MatDialog
  ) {}

  options: Option[] = this.enlacesService.getOpciones();
  redesSociales: RedSocial[] = this.enlacesService.getRedesSociales();
  
  responsive: boolean = window.innerWidth < 959;
  scrollable: boolean = (!this.responsive ? (window.pageXOffset < 80 ? false : true) : true);


  // Evento para el scroll
  @HostListener("window:scroll", ['$event'])
  hacerScrollable(event: Event) {
    this.responsive = window.innerWidth < 959;

    if (!this.responsive) {
      if (window.pageYOffset < 80) {
        this.scrollable = false;
      } else {
        this.scrollable = true;
      }
    } else {
      this.scrollable = true;
    }
  }

  menuOpen: boolean = false;

  pulsarBotonMenuResponsive(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function() { window.scrollTo(x, y); };
    } else {
      window.onscroll = function() {};
    }
  }

  openDialog():void {
    this.dialog.open(ReservaModalComponent);
  }

}
