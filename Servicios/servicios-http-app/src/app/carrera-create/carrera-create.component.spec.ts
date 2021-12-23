import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraCreateComponent } from './carrera-create.component';

describe('CarreraCreateComponent', () => {
  let component: CarreraCreateComponent;
  let fixture: ComponentFixture<CarreraCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreraCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
