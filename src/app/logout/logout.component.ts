import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../common/service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.setUserLoggedOut().subscribe(res => {
      if (res.success) {
        this.userService.setUserData({});
        this.router.navigate(['/login']);
      }
    }, error => {
      console.log(error);
    });
  }

}
