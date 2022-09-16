import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnadirSeccionComponent } from './annadir-seccion.component';

describe('AnnadirSeccionComponent', () => {
  let component: AnnadirSeccionComponent;
  let fixture: ComponentFixture<AnnadirSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnadirSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnadirSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
