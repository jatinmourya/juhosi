import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent {
  constructor(private form: FormBuilder, private service: ServiceService) {}

  decimalPattern = /^-?\d+(\.\d+)?$/;

  orderForm = this.form.group({
    order_date: ['', [Validators.required]],
    company: ['', [Validators.required]],
    owner: ['', [Validators.required]],
    item: ['', [Validators.required]],
    quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    weight: [
      '',
      [Validators.required, Validators.pattern(this.decimalPattern)],
    ],
    req_for_shipment: ['', [Validators.required]],
    tracking_id: ['', [Validators.required]],
    shipment_size: this.form.group({
      length: [
        '',
        [Validators.required, Validators.pattern(this.decimalPattern)],
      ],
      breadth: [
        '',
        [Validators.required, Validators.pattern(this.decimalPattern)],
      ],
      height: [
        '',
        [Validators.required, Validators.pattern(this.decimalPattern)],
      ],
    }),
    box_count: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    specification: ['', [Validators.required]],
    checklist_quantity: ['', [Validators.required]],
  });

  addOrder(form: any) {
    this.service.addOrder(form).subscribe((res: any) => {
      console.log(res);
      this.orderForm.reset();
    });
  }
}
