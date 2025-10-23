import { Component, OnInit } from '@angular/core';
import { Tasks } from '../forms/tasks';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-my-tasks-component',
  standalone: false,
  templateUrl: './my-tasks-component.html',
  styleUrls: ['./my-tasks-component.css']
})
export class MyTasksComponent implements OnInit {

  currentTime: string = '';
  task: Tasks[] = [];
  formGroupTasks: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: TaskService) {
    this.formGroupTasks = this.formBuilder.group({
      title: ['']
    });
  }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    this.service.getAllTasks().subscribe({
      next: (json) => (this.task = json)
    });
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'medium'
    });
  }

  save() {
    this.service.save(this.formGroupTasks.value).subscribe({
      next: (json) => {
        this.task.push(json);
        this.formGroupTasks.reset();
      }
    });
  }
}
