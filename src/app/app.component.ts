import { Component } from '@angular/core';
import { HttpClientModule, } from '@angular/common/http';
import { UserListComponent } from "./component/user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HttpClientModule, UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api-exercise';
}
