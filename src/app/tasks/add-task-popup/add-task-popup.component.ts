import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../../services/tasks.service';

@Component({
    selector: 'app-add-task-popup',
    imports: [FormsModule],
    templateUrl: './add-task-popup.component.html',
    styleUrl: './add-task-popup.component.css'
})
export class AddTaskPopupComponent {
  userId = input.required<string>();

  close = output<void>();

  protected title = signal<string>('');
  protected summary = signal<string>('');
  protected dueDate = signal<string>('');

  private taskService = inject(TasksService);

  onConfirm(): void {
    this.taskService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        dueDate: this.dueDate(),
      },
      this.userId(),
    );
    this.close.emit();
  }

  onClose(): void {
    this.close.emit();
  }
}
