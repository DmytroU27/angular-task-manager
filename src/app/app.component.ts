import { Component, signal } from '@angular/core';

import { DUMMY_USERS } from '../../data/dummy-users';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  userToShow = signal<UserModel>(this.users()[0]);

  onSelectUser(id: string): void {
    const user = this.users().find((user) => user.id === id);
    this.userToShow.set(user!);
  }
}
