import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dinamico1Component } from './dinamico1.component';

describe('Dinamico1Component', () => {
  let component: Dinamico1Component;
  let fixture: ComponentFixture<Dinamico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dinamico1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dinamico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
