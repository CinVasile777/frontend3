import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolexForWomenComponent } from './rolex-for-women.component';

describe('RolexForWomenComponent', () => {
  let component: RolexForWomenComponent;
  let fixture: ComponentFixture<RolexForWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolexForWomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolexForWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
