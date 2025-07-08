import { computed, Injectable, Signal, signal } from '@angular/core';

import { DUMMY_TASKS } from '../../../data/dummy-tasks';
import { TaskModel } from '../../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal<TaskModel[]>(DUMMY_TASKS);

  addTask(taskData: Omit<TaskModel, 'id' | 'userId'>, userId: string): void {
    const newTask: TaskModel = {
      ...taskData,
      userId: userId,
      id: Math.random().toString(),
    };
    this.tasks.update((tasks) => [newTask, ...tasks]);
  }

  removeTask(taskId: string): void {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }
}
