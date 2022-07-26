import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpsInfosComponent } from './grps-infos.component';

describe('GrpsInfosComponent', () => {
  let component: GrpsInfosComponent;
  let fixture: ComponentFixture<GrpsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpsInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrpsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
