import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignyourqueryComponent } from './designyourquery.component';

describe('DesignyourqueryComponent', () => {
  let component: DesignyourqueryComponent;
  let fixture: ComponentFixture<DesignyourqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignyourqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignyourqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
