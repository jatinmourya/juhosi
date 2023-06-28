import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  constructor(private service: ServiceService) {}
  userOrderDetails: any = {};
  customer1: any = {};
  customer2: any = {};
  ngOnInit() {
    this.service
      .getOrderDetails({ username: this.service.userData.username })
      .subscribe(async (res: any) => {
        console.log(res);
        await res.response.forEach((el: any) => {
          this.userOrderDetails[el.username] = {
            sum_of_quantity: el['sum(quantity)'],
            sum_of_weight: el['sum(weight)'],
            sum_of_box_count: el['sum(box_count)'],
          };
        });
        console.log(this.userOrderDetails);
        this.customer1 = this.userOrderDetails.customer1
          ? this.userOrderDetails.customer1
          : {};
        this.customer2 = this.userOrderDetails.customer2
          ? this.userOrderDetails.customer2
          : {};
      });
  }
}
