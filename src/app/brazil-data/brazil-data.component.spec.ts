import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazilDataComponent } from './brazil-data.component';

describe('BrazilDataComponent', () => {
  let component: BrazilDataComponent;
  let fixture: ComponentFixture<BrazilDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazilDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazilDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
