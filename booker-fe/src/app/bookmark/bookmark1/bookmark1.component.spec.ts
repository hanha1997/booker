import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookmark1Component } from './bookmark1.component';

describe('Bookmark1Component', () => {
  let component: Bookmark1Component;
  let fixture: ComponentFixture<Bookmark1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bookmark1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookmark1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
