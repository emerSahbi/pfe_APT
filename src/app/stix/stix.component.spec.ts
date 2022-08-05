import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STIXComponent } from './stix.component';

describe('STIXComponent', () => {
  let component: STIXComponent;
  let fixture: ComponentFixture<STIXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STIXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STIXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
