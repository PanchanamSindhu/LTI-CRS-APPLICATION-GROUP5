import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcatlogComponent } from './viewcatlog.component';

describe('ViewcatlogComponent', () => {
  let component: ViewcatlogComponent;
  let fixture: ComponentFixture<ViewcatlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcatlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
