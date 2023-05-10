import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoLGPDComponent } from './resultado-lgpd.component';

describe('ResultadoLGPDComponent', () => {
  let component: ResultadoLGPDComponent;
  let fixture: ComponentFixture<ResultadoLGPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoLGPDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoLGPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
