import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasListarComponent } from './facturas-listar.component';

describe('FacturasListarComponent', () => {
  let component: FacturasListarComponent;
  let fixture: ComponentFixture<FacturasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
