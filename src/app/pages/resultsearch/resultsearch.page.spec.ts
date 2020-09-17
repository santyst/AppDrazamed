import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultsearchPage } from './resultsearch.page';

describe('ResultsearchPage', () => {
  let component: ResultsearchPage;
  let fixture: ComponentFixture<ResultsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
