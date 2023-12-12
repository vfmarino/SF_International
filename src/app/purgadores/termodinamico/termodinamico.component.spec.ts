import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermodinamicoComponent } from './termodinamico.component';

describe('TermodinamicoComponent', () => {
  let component: TermodinamicoComponent;
  let fixture: ComponentFixture<TermodinamicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermodinamicoComponent]
    });
    fixture = TestBed.createComponent(TermodinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
