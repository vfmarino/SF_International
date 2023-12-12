import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOperadaArComprimidoComponent } from './auto-operada-ar-comprimido.component';

describe('AutoOperadaArComprimidoComponent', () => {
  let component: AutoOperadaArComprimidoComponent;
  let fixture: ComponentFixture<AutoOperadaArComprimidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoOperadaArComprimidoComponent]
    });
    fixture = TestBed.createComponent(AutoOperadaArComprimidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
