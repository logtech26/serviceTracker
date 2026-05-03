import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgElementComponent } from './ng-element.component';

describe('NgElementComponent', () => {
  let component: NgElementComponent;
  let fixture: ComponentFixture<NgElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgElementComponent]
    });
    fixture = TestBed.createComponent(NgElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
