import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aap1Component } from './aap1.component';

describe('Aap1Component', () => {
  let component: Aap1Component;
  let fixture: ComponentFixture<Aap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
