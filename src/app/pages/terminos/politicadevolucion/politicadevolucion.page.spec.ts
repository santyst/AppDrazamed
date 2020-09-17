import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticadevolucionPage } from './politicadevolucion.page';

describe('PoliticadevolucionPage', () => {
  let component: PoliticadevolucionPage;
  let fixture: ComponentFixture<PoliticadevolucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticadevolucionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticadevolucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
