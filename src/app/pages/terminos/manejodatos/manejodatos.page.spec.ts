import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManejodatosPage } from './manejodatos.page';

describe('ManejodatosPage', () => {
  let component: ManejodatosPage;
  let fixture: ComponentFixture<ManejodatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejodatosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManejodatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
