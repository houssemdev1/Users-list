import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Input() isEmpty: boolean;
  @Input() isSelected: boolean;
  @Output() userInfos = new EventEmitter<User>();
  @Output() deletedUser = new EventEmitter<User>();
  childNumber: number;
  constructor() {}

  ngOnInit(): void {}
  updateUser(childNumber) {
    this.user.nombre_enfants = Number(childNumber);
    this.userInfos.emit(this.user);
  }
  removeUser() {
    this.deletedUser.emit(this.user);
  }
}
