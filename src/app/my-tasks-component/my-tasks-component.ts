import { Component, OnInit } from '@angular/core';
import { Tasks } from '../export-forms/tasks';
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
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: TaskService) {
    this.formGroupTasks = this.formBuilder.group({
      id: [''],
      title: ['']
    });
  }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.loadPendingTasks();
  }

  loadPendingTasks() {
    this.service.getPendingTasks().subscribe({
      next: json => this.task = json
    });
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString('pt-BR', 
    {
      dateStyle: 'short',
      timeStyle: 'medium'
    });
  }

  save() {
    this.service.save(this.formGroupTasks.value).subscribe({
      next: json => {
        this.task.push(json);
        this.formGroupTasks.reset();
      }
    });
  }

  delete(task: Tasks) {
    this.service.delete(task).subscribe({
      next: () => this.task = this.task.filter(t => t.id != task.id)
    });
  }

  OnClickUpdate(task: Tasks) {
    this.formGroupTasks.setValue(task);
    this.isEditing = true;
  }

  update() {
    this.service.update(this.formGroupTasks.value).subscribe({
      next: json => {
        let index = this.task.findIndex(t => t.id == json.id);
        this.task[index] = json;
        this.isEditing = false;
        this.formGroupTasks.reset();
      }
    });
  }

  cancelEdit() {
    this.isEditing = false;
    this.formGroupTasks.reset();
  }

  markAsCompleted(task: Tasks) {
    this.service.markAsCompleted(task).subscribe({
      next: () => {
        // Remove da lista de pendentes
        this.task = this.task.filter(t => t.id !== task.id);
      }
    });
  }
}