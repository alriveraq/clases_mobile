import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarImageComponent } from './mostrar-image.component';

describe('MostrarImageComponent', () => {
  let component: MostrarImageComponent;
  let fixture: ComponentFixture<MostrarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
