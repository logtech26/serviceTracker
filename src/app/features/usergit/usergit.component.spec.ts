import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergitComponent } from './usergit.component';

describe('UsergitComponent', () => {
  let component: UsergitComponent;
  let fixture: ComponentFixture<UsergitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsergitComponent]
    });
    fixture = TestBed.createComponent(UsergitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
