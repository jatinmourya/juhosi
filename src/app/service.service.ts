import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  url: any = 'http://localhost:9123';
  loginUser(obj: any) {
    // console.log(obj);
    return this.http.post(this.url + '/login', obj);
  }
  addOrder(obj: any) {
    Object.assign(obj, { username: this.userData.username });
    // console.log(obj);
    return this.http.post(this.url + '/add-order', obj);
  }
  getOrderDetails(obj: any) {
    // console.log(obj);
    return this.http.post(this.url + '/order-details', obj);
  }

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  userData: any = {};
}
