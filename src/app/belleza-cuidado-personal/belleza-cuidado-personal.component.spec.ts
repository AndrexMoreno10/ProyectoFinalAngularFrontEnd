import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellezaCuidadoPersonalComponent } from './belleza-cuidado-personal.component';

describe('BellezaCuidadoPersonalComponent', () => {
  let component: BellezaCuidadoPersonalComponent;
  let fixture: ComponentFixture<BellezaCuidadoPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BellezaCuidadoPersonalComponent]
    });
    fixture = TestBed.createComponent(BellezaCuidadoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
