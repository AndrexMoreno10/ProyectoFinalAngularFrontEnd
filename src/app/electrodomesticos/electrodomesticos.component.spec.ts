import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticosComponent } from './electrodomesticos.component';

describe('ElectrodomesticosComponent', () => {
  let component: ElectrodomesticosComponent;
  let fixture: ComponentFixture<ElectrodomesticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectrodomesticosComponent]
    });
    fixture = TestBed.createComponent(ElectrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
