import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MipastilleroPage } from './mipastillero.page';

describe('MipastilleroPage', () => {
  let component: MipastilleroPage;
  let fixture: ComponentFixture<MipastilleroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MipastilleroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MipastilleroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
