import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoDiretaArComprimidoComponent } from './acao-direta-ar-comprimido.component';

describe('AcaoDiretaArComprimidoComponent', () => {
  let component: AcaoDiretaArComprimidoComponent;
  let fixture: ComponentFixture<AcaoDiretaArComprimidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcaoDiretaArComprimidoComponent]
    });
    fixture = TestBed.createComponent(AcaoDiretaArComprimidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
