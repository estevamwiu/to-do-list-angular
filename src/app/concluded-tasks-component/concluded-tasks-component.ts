import { Component, OnInit } from '@angular/core';
import { Tasks } from '../export-forms/tasks';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-concluded-tasks-component',
  standalone: false,
  templateUrl: './concluded-tasks-component.html',
  styleUrl: './concluded-tasks-component.css'
})
export class ConcludedTasksComponent implements OnInit {

  completedTasks: Tasks[] = [];

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.loadCompletedTasks();
  }

  loadCompletedTasks() {
    this.service.getCompletedTasks().subscribe({
      next: (task) => this.completedTasks = task
    });
  }

  markAsPending(task: Tasks) {
    this.service.markAsPending(task).subscribe({
      next: () => {
        this.completedTasks = this.completedTasks.filter(t => t.id !== task.id);
      }
    });
  }

  delete(task: Tasks) {
    this.service.delete(task).subscribe({
      next: () => {
        this.completedTasks = this.completedTasks.filter(t => t.id !== task.id);
      }
    });
  }

  formatDate(date: string | Date): string {
    return new Date(date).toLocaleString('pt-BR');
  }
}

