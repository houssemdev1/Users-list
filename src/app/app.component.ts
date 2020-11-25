import {Component, OnInit} from '@angular/core';
import {User} from './entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-technique';
  listUsers:User[]=[];

  ngOnInit(): void {

  }

  /*
  * @ToDo
  * */
  LoadListUsersFromJson(){}

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){}

}
