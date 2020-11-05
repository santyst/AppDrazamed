import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAlarmPage } from './edit-alarm.page';

describe('EditAlarmPage', () => {
  let component: EditAlarmPage;
  let fixture: ComponentFixture<EditAlarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAlarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
