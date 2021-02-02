import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProximaEntregaPage } from './proxima-entrega.page';

describe('ProximaEntregaPage', () => {
  let component: ProximaEntregaPage;
  let fixture: ComponentFixture<ProximaEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximaEntregaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProximaEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
