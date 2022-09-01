import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpokemonComponent } from './listarpokemon.component';

describe('ListarpokemonComponent', () => {
  let component: ListarpokemonComponent;
  let fixture: ComponentFixture<ListarpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
