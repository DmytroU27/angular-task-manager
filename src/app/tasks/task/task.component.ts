import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CardComponent } from '../../shared/card/card.component';

import { TasksService } from '../../services/tasks.service';

import { TaskModel } from '../../../models/task.model';

@Component({
    selector: 'app-task',
    imports: [CardComponent, DatePipe],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<TaskModel>();

  private tasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task().id);
  }
}
