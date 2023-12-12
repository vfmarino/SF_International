import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidoAutoOperadaComponent } from './fluido-auto-operada.component';

describe('FluidoAutoOperadaComponent', () => {
  let component: FluidoAutoOperadaComponent;
  let fixture: ComponentFixture<FluidoAutoOperadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FluidoAutoOperadaComponent]
    });
    fixture = TestBed.createComponent(FluidoAutoOperadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
