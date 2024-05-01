import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEid24Component } from './dialog-eid24.component';

describe('DialogEid24Component', () => {
  let component: DialogEid24Component;
  let fixture: ComponentFixture<DialogEid24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEid24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEid24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
