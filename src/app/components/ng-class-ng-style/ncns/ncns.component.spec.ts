import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcnsComponent } from './ncns.component';

describe('NcnsComponent', () => {
  let component: NcnsComponent;
  let fixture: ComponentFixture<NcnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
