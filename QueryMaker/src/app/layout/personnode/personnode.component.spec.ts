import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnodeComponent } from './personnode.component';

describe('PersonnodeComponent', () => {
  let component: PersonnodeComponent;
  let fixture: ComponentFixture<PersonnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
