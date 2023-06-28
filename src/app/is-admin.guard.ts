import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuard {
  constructor(private service: ServiceService, private router: Router) {}
  canActivate() {
    if (this.service.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
