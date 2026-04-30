import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonComponent } from './cartoon.component';

describe('CartoonComponent', () => {
  let component: CartoonComponent;
  let fixture: ComponentFixture<CartoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartoonComponent]
    });
    fixture = TestBed.createComponent(CartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
