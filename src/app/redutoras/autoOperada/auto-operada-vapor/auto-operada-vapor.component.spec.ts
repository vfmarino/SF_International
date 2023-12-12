import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOperadaVaporComponent } from './auto-operada-vapor.component';

describe('AutoOperadaVaporComponent', () => {
  let component: AutoOperadaVaporComponent;
  let fixture: ComponentFixture<AutoOperadaVaporComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoOperadaVaporComponent]
    });
    fixture = TestBed.createComponent(AutoOperadaVaporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
