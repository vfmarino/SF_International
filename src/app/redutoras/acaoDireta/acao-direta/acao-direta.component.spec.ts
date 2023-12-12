import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoDiretaComponent } from './acao-direta.component';

describe('AcaoDiretaComponent', () => {
  let component: AcaoDiretaComponent;
  let fixture: ComponentFixture<AcaoDiretaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcaoDiretaComponent]
    });
    fixture = TestBed.createComponent(AcaoDiretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
