import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionMenuComponent } from './configuracion-menu.component';

describe('ConfiguracionMenuComponent', () => {
  let component: ConfiguracionMenuComponent;
  let fixture: ComponentFixture<ConfiguracionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
