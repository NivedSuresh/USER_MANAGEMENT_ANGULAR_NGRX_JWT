import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDUSERComponent } from './add-user.component';

describe('ADDUSERComponent', () => {
  let component: ADDUSERComponent;
  let fixture: ComponentFixture<ADDUSERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADDUSERComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ADDUSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
