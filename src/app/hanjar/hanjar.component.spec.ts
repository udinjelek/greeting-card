import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanjarComponent } from './hanjar.component';

describe('HanjarComponent', () => {
  let component: HanjarComponent;
  let fixture: ComponentFixture<HanjarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanjarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
