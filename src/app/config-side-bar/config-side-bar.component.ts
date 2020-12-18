import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../entity/User';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css'],
})
export class ConfigSideBarComponent implements OnInit, OnChanges {
  @Output() userInfos = new EventEmitter<any>();
  //side bar state
  @Input() user: User;
  @Input() allowChangeNumber: boolean;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      id: '',
      nom: '',
      prenom: '',
      nombre_enfants: '',
    });
  }
  ngOnChanges() {
    if (this.user && Object.keys(this.user).length > 0) {
      this.userForm.patchValue(this.user);
    } else {
      this.userForm.reset();
      window.scroll(0, 0);
    }
  }
  createOrUpdateUser() {
    this.userInfos.emit(this.userForm.value);
  }
  ngOnInit(): void {}
}
