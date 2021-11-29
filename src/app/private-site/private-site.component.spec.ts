import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSiteComponent } from './private-site.component';

describe('PrivateSiteComponent', () => {
  let component: PrivateSiteComponent;
  let fixture: ComponentFixture<PrivateSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
