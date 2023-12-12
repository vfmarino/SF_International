import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaporSaturadoComponent } from './vapor-saturado.component';

describe('VaporSaturadoComponent', () => {
  let component: VaporSaturadoComponent;
  let fixture: ComponentFixture<VaporSaturadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaporSaturadoComponent]
    });
    fixture = TestBed.createComponent(VaporSaturadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
