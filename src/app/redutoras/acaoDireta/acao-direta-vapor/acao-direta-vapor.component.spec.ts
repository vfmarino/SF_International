import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoDiretaVaporComponent } from './acao-direta-vapor.component';

describe('AcaoDiretaVaporComponent', () => {
  let component: AcaoDiretaVaporComponent;
  let fixture: ComponentFixture<AcaoDiretaVaporComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcaoDiretaVaporComponent]
    });
    fixture = TestBed.createComponent(AcaoDiretaVaporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
