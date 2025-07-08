import { Component, computed, inject, input, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { AddTaskPopupComponent } from './add-task-popup/add-task-popup.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskPopupComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  userName = input.required<string>();

  private taskService = inject(TasksService);

  isAddingTask = signal<boolean>(false);
  selectedUserTasks = computed(() =>
    this.taskService.tasks().filter((tasks) => tasks.userId === this.userId()),
  );

  onStartAddTask(): void {
    this.isAddingTask.set(true);
  }

  onCancelAddTask(): void {
    this.isAddingTask.set(false);
  }
}
