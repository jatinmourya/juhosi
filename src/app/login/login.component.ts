import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private form: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {}
  loginForm = this.form.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  // also recommended
  // of([1,2,3]).subscribe({
  //     next: (v) => console.log(v),
  //     error: (e) => console.error(e),
  //     complete: () => console.info('complete')
  // })
  submitLoginForm(form: any) {
    this.service.loginUser(form).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.response[0]) {
          this.service.isLoggedIn = true;

          this.service.userData = res.response[0];

          if (res.response[0].username == 'admin') {
            this.service.isAdmin = true;
            this.router.navigate(['/order-details']);
          } else {
            this.service.isAdmin = false;
            this.router.navigate(['/add-order']);
          }
          console.log(this.service.isAdmin);
          localStorage.setItem('user', JSON.stringify(res.response[0]));
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
