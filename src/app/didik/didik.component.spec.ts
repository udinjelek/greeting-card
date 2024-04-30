import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidikComponent } from './didik.component';

describe('DidikComponent', () => {
  let component: DidikComponent;
  let fixture: ComponentFixture<DidikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
