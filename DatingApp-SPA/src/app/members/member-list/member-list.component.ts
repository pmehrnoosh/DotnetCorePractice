import { Component, OnInit } from '@angular/core';
import { User } from '../../_model/User';
import { UserService } from '../../_Services/user.service';
import { AlertifyService } from '../../_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
users: User[];
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.users = data['users'];
    });
  }

// loadUsers() {
//  this.userService.getUsers().subscribe((user: User[]) => {
//    this.users = user;
//   }, error => {
//     this.alertify.error(error);
//   });
// }
}
