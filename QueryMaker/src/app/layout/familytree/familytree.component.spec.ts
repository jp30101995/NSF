import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeComponent } from './familytree.component';

describe('FamilytreeComponent', () => {
  let component: FamilyTreeComponent;
  let fixture: ComponentFixture<FamilyTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
