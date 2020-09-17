import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticaretractoPage } from './politicaretracto.page';

describe('PoliticaretractoPage', () => {
  let component: PoliticaretractoPage;
  let fixture: ComponentFixture<PoliticaretractoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaretractoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticaretractoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
