import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoDPComponent } from './correcao-dp.component';

describe('CorrecaoDPComponent', () => {
  let component: CorrecaoDPComponent;
  let fixture: ComponentFixture<CorrecaoDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrecaoDPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrecaoDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
