import { Component } from '@angular/core';
import { Tasks } from '../forms/tasks';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-tasks-component',
  standalone: false,
  templateUrl: './my-tasks-component.html',
  styleUrl: './my-tasks-component.css'
})
export class MyTasksComponent {

    task: Tasks[] = [];
    formGroupTasks: FormGroup;

    constructor (private formBuilder: FormBuilder) {
        this.formGroupTasks = formBuilder.group({
            title: ['']
        });
    }

 save() {
    this.task.push(this.formGroupTasks.value);
    this.formGroupTasks.reset();
  }
}
