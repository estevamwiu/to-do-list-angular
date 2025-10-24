import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludedTasksComponent } from './concluded-tasks-component';

describe('ConcludedTasksComponent', () => {
  let component: ConcludedTasksComponent;
  let fixture: ComponentFixture<ConcludedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcludedTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcludedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
