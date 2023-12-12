import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOperadaComponent } from './auto-operada.component';

describe('AutoOperadaComponent', () => {
  let component: AutoOperadaComponent;
  let fixture: ComponentFixture<AutoOperadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoOperadaComponent]
    });
    fixture = TestBed.createComponent(AutoOperadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
