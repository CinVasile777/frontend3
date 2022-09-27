import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlagenderForWomenComponent } from './slagender-for-women.component';

describe('SlagenderForWomenComponent', () => {
  let component: SlagenderForWomenComponent;
  let fixture: ComponentFixture<SlagenderForWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlagenderForWomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlagenderForWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
