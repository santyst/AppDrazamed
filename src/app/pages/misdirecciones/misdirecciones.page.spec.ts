import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisdireccionesPage } from './misdirecciones.page';

describe('MisdireccionesPage', () => {
  let component: MisdireccionesPage;
  let fixture: ComponentFixture<MisdireccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisdireccionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisdireccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
