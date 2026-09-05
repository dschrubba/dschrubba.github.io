import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewLanding } from './view-landing';

describe('ViewLanding', () => {
  let component: ViewLanding;
  let fixture: ComponentFixture<ViewLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
