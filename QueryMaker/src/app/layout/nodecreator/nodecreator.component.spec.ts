import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodecreatorComponent } from './nodecreator.component';

describe('NodecreatorComponent', () => {
  let component: NodecreatorComponent;
  let fixture: ComponentFixture<NodecreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodecreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
