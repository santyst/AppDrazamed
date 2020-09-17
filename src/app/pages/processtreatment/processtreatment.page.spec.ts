import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcesstreatmentPage } from './processtreatment.page';

describe('ProcesstreatmentPage', () => {
  let component: ProcesstreatmentPage;
  let fixture: ComponentFixture<ProcesstreatmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesstreatmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesstreatmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
