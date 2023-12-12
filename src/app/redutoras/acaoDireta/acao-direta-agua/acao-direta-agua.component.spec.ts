import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoDiretaAguaComponent } from './acao-direta-agua.component';

describe('AcaoDiretaAguaComponent', () => {
  let component: AcaoDiretaAguaComponent;
  let fixture: ComponentFixture<AcaoDiretaAguaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcaoDiretaAguaComponent]
    });
    fixture = TestBed.createComponent(AcaoDiretaAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
