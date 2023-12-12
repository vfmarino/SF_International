import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBoiaComponent } from './tipo-boia.component';

describe('TipoBoiaComponent', () => {
  let component: TipoBoiaComponent;
  let fixture: ComponentFixture<TipoBoiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoBoiaComponent]
    });
    fixture = TestBed.createComponent(TipoBoiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
