import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'juhosi_web_app';
  constructor(public service: ServiceService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.service.isLoggedIn = true;

      let userdata = JSON.parse(localStorage['user']);
      console.log(userdata);

      this.service.userData = userdata;

      if (userdata.username == 'admin') {
        this.service.isAdmin = true;
        this.router.navigate(['/order-details']);
      } else {
        this.service.isAdmin = false;
        this.router.navigate(['/add-order']);
      }

      console.log(this.service.isAdmin);
    }
  }
  logoutUser() {
    localStorage.clear();
    location.reload();
  }
}
