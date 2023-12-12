import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosumoComponent } from './cosumo.component';

describe('CosumoComponent', () => {
  let component: CosumoComponent;
  let fixture: ComponentFixture<CosumoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CosumoComponent]
    });
    fixture = TestBed.createComponent(CosumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
