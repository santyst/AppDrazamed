import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestOpenPage } from './request-open.page';

describe('RequestOpenPage', () => {
  let component: RequestOpenPage;
  let fixture: ComponentFixture<RequestOpenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOpenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestOpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
