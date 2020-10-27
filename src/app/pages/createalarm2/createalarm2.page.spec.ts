import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Createalarm2Page } from './createalarm2.page';

describe('Createalarm2Page', () => {
  let component: Createalarm2Page;
  let fixture: ComponentFixture<Createalarm2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createalarm2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Createalarm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
