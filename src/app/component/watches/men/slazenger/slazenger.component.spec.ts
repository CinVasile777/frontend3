import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlazengerComponent } from './slazenger.component';

describe('SlazengerComponent', () => {
  let component: SlazengerComponent;
  let fixture: ComponentFixture<SlazengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlazengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlazengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
