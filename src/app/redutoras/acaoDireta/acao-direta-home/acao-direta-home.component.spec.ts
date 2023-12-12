import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoDiretaHomeComponent } from './acao-direta-home.component';

describe('AcaoDiretaHomeComponent', () => {
  let component: AcaoDiretaHomeComponent;
  let fixture: ComponentFixture<AcaoDiretaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcaoDiretaHomeComponent]
    });
    fixture = TestBed.createComponent(AcaoDiretaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
