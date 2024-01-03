import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROFILEComponent } from './profile.component';

describe('PROFILEComponent', () => {
  let component: PROFILEComponent;
  let fixture: ComponentFixture<PROFILEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PROFILEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PROFILEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
