import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAgGridComponent } from './clientes-ag-grid.component';

describe('ClientesAgGridComponent', () => {
  let component: ClientesAgGridComponent;
  let fixture: ComponentFixture<ClientesAgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesAgGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
