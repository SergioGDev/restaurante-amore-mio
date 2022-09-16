import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionVinacotecaComponent } from './configuracion-vinacoteca.component';

describe('ConfiguracionVinacotecaComponent', () => {
  let component: ConfiguracionVinacotecaComponent;
  let fixture: ComponentFixture<ConfiguracionVinacotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionVinacotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionVinacotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
