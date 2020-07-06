import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastilleroPage } from './pastillero.page';

describe('PastilleroPage', () => {
  let component: PastilleroPage;
  let fixture: ComponentFixture<PastilleroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastilleroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastilleroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
