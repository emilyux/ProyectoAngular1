import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dinamico2Component } from './dinamico2.component';

describe('Dinamico2Component', () => {
  let component: Dinamico2Component;
  let fixture: ComponentFixture<Dinamico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dinamico2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dinamico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
