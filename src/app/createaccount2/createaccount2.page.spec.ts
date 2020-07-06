import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Createaccount2Page } from './createaccount2.page';

describe('Createaccount2Page', () => {
  let component: Createaccount2Page;
  let fixture: ComponentFixture<Createaccount2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createaccount2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Createaccount2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
