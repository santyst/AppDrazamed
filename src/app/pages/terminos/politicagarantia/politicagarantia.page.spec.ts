import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticagarantiaPage } from './politicagarantia.page';

describe('PoliticagarantiaPage', () => {
  let component: PoliticagarantiaPage;
  let fixture: ComponentFixture<PoliticagarantiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticagarantiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticagarantiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
