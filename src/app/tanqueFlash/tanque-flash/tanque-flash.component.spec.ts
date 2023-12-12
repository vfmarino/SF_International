import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanqueFlashComponent } from './tanque-flash.component';

describe('TanqueFlashComponent', () => {
  let component: TanqueFlashComponent;
  let fixture: ComponentFixture<TanqueFlashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanqueFlashComponent]
    });
    fixture = TestBed.createComponent(TanqueFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
