import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillGridCell } from './skill-grid-cell';

describe('SkillGridCell', () => {
  let component: SkillGridCell;
  let fixture: ComponentFixture<SkillGridCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillGridCell],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillGridCell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
