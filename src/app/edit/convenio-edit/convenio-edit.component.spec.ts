import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioEditComponent } from './convenio-edit.component';

describe('ConvenioEditComponent', () => {
  let component: ConvenioEditComponent;
  let fixture: ComponentFixture<ConvenioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
