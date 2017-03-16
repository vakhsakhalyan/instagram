import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  instagramData:any;

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.indexService.getAllUsers(20).subscribe(users=> {
      this.instagramData = users;
      console.log(users)
    })

  }

}
