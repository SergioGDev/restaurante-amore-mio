import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionInicioComponent } from './configuracion-inicio.component';

describe('ConfiguracionInicioComponent', () => {
  let component: ConfiguracionInicioComponent;
  let fixture: ComponentFixture<ConfiguracionInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
