import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOperadaAguaComponent } from './auto-operada-agua.component';

describe('AutoOperadaAguaComponent', () => {
  let component: AutoOperadaAguaComponent;
  let fixture: ComponentFixture<AutoOperadaAguaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoOperadaAguaComponent]
    });
    fixture = TestBed.createComponent(AutoOperadaAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
