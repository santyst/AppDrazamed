import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatealarmPage } from './createalarm.page';

describe('CreatealarmPage', () => {
  let component: CreatealarmPage;
  let fixture: ComponentFixture<CreatealarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatealarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatealarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
