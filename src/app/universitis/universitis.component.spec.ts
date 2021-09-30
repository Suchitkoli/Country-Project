import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitisComponent } from './universitis.component';

describe('UniversitisComponent', () => {
  let component: UniversitisComponent;
  let fixture: ComponentFixture<UniversitisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
