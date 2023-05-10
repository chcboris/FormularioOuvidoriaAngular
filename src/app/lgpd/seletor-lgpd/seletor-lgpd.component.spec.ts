import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorLGPDComponent } from './seletor-lgpd.component';

describe('SeletorLGPDComponent', () => {
  let component: SeletorLGPDComponent;
  let fixture: ComponentFixture<SeletorLGPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorLGPDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorLGPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
