import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USERLISTComponent } from './user-list.component';

describe('USERLISTComponent', () => {
  let component: USERLISTComponent;
  let fixture: ComponentFixture<USERLISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [USERLISTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(USERLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
