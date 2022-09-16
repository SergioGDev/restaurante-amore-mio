import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { SeccionMenuSchema, PlatoSchema } from '../../interfaces/restaurante.interface';
import { MenuService } from '../../services/menu.service';
import { SeccionesMenuService } from '../../services/secciones-menu.service';

@Component({
  selector: 'app-configuracion-menu',
  templateUrl: './configuracion-menu.component.html',
  styleUrls: ['./configuracion-menu.component.css', '../dashboard.component.css']
})
export class ConfiguracionMenuComponent implements OnInit {
  
  constructor(
    private seccionesMenuService: SeccionesMenuService,
    private menuService: MenuService,
    private fb: FormBuilder
  ) { }
  
  vSecciones: SeccionMenuSchema[] = [];
  vPlatos: PlatoSchema[] = [];

  annadiendoSeccion: boolean = false;
  nuevaSeccionForm: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.min(2), Validators.max(20) ]],
    submensaje: [ '', [ Validators.min(5), Validators.max(50) ]]
  })

  ngOnInit(): void {
    this.seccionesMenuService.getListadoSeciones().pipe(
      switchMap( data => {
        this.vSecciones.push( {
          nombre: 'Sección de prueba 1',
          submensaje: 'Submensaje de la sección de prueba 1'
        })
        this.vSecciones.push( {
          nombre: 'Sección de prueba 2',
          submensaje: 'Submensaje de la sección de prueba 2'
        })
        this.vSecciones.push( {
          nombre: 'Sección de prueba 3',
          submensaje: 'Submensaje de la sección de prueba 3'
        })
        return this.menuService.getMenuCompleto();
      })
    ).subscribe(
      data => {
        console.log('Menú completo:', data);
      }
    )
  }

  cerrarGuardar() {
    this.annadiendoSeccion = false;
  }

  guardarSeccion() {
    if (this.nuevaSeccionForm.invalid) {
      this.nuevaSeccionForm.markAllAsTouched();
      return;
    }

    this.annadiendoSeccion = false;
    console.log('GUARDAR:', this.nuevaSeccionForm.value)
  }

}
