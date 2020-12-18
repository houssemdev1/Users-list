import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfigSideBarComponent } from './config-side-bar/config-side-bar.component';
import { ApiUsersService } from './services/api-users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('sideBarRef') sideBar: ConfigSideBarComponent;
  title = 'test-technique';
  listUsers: any;
  currentUser: any;
  isNewUser: boolean;
  allowAddBtn: boolean;

  constructor(private apiUserService: ApiUsersService) {}
  ngOnInit() {
    this.LoadListUsersFromJson();
  }
  createOrUpdateUser(user) {
    this.allowAddBtn = false;
    this.currentUser = user;
    if (user.id === null && !this.listUsers.includes(user)) {
      user.id = this.listUsers.length + 1;
      this.listUsers.push(user);
    } else {
      this.listUsers.map((item, index) => {
        if (item.id === user.id) {
          delete user.isForm;
          this.listUsers[index] = user;
        }
      });
      this.sideBar.ngOnChanges();
    }
  }
  removeUser(user) {
    this.allowAddBtn = false;
    this.listUsers.splice(this.listUsers.indexOf(user), 1);
  }
  addNewUser(step?) {
    this.allowAddBtn = true;
    if (step) {
      this.sideBar.createOrUpdateUser();
      window.scroll(0, 100000);
      this.allowAddBtn = false;
    } else {
      this.currentUser = {};
      this.sideBar.ngOnChanges();
    }
  }
  /*
   * @ToDo
   * */
  LoadListUsersFromJson() {
    this.apiUserService.getUsersList().subscribe((data) => {
      this.listUsers = data;
    });
    this.currentUser = null;
  }
}
