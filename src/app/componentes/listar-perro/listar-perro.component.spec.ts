import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPerroComponent } from './listar-perro.component';

describe('ListarPerroComponent', () => {
  let component: ListarPerroComponent;
  let fixture: ComponentFixture<ListarPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPerroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
