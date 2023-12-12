import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurgadoresComponent } from './purgadores.component';

describe('PurgadoresComponent', () => {
  let component: PurgadoresComponent;
  let fixture: ComponentFixture<PurgadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurgadoresComponent]
    });
    fixture = TestBed.createComponent(PurgadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
