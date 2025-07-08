import { Component, computed, input, output } from '@angular/core';

import { UserModel } from '../../models/user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<UserModel>();
  selected = input.required<boolean>();

  avatarPath = computed(() => 'assets/users/' + this.user().avatar);

  selectUser = output<string>();

  onSelectUser() {
    this.selectUser.emit(this.user().id);
  }
}
