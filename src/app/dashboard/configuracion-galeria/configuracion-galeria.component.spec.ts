import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionGaleriaComponent } from './configuracion-galeria.component';

describe('ConfiguracionGaleriaComponent', () => {
  let component: ConfiguracionGaleriaComponent;
  let fixture: ComponentFixture<ConfiguracionGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
