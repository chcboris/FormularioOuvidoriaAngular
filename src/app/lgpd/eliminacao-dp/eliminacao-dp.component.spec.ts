import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminacaoDPComponent } from './eliminacao-dp.component';

describe('EliminacaoDPComponent', () => {
  let component: EliminacaoDPComponent;
  let fixture: ComponentFixture<EliminacaoDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminacaoDPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminacaoDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
