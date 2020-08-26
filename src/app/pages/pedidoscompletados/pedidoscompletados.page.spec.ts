import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoscompletadosPage } from './pedidoscompletados.page';

describe('PedidoscompletadosPage', () => {
  let component: PedidoscompletadosPage;
  let fixture: ComponentFixture<PedidoscompletadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoscompletadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoscompletadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
