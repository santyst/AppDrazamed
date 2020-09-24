import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestClosedPage } from './request-closed.page';

describe('RequestClosedPage', () => {
  let component: RequestClosedPage;
  let fixture: ComponentFixture<RequestClosedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestClosedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestClosedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
