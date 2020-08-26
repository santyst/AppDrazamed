import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdddirectionPage } from './adddirection.page';

describe('AdddirectionPage', () => {
  let component: AdddirectionPage;
  let fixture: ComponentFixture<AdddirectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddirectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdddirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
