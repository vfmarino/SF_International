import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOperadaHomeComponent } from './auto-operada-home.component';

describe('AutoOperadaHomeComponent', () => {
  let component: AutoOperadaHomeComponent;
  let fixture: ComponentFixture<AutoOperadaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoOperadaHomeComponent]
    });
    fixture = TestBed.createComponent(AutoOperadaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
