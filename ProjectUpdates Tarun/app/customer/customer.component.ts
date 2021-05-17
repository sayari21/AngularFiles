import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer : Customer;
  isValid : boolean;
  msg : string;
  constructor(private _customerService : CustomerService) {
    this.isValid=false;
    this.customer=new Customer();
   }
   insert(customerForm : NgForm) {
    if(customerForm.invalid){
      return;
    }
    this.isValid=true;
    if (this.isValid==true) {
     // this.msg="Form Submitted Successfully...";
     this._customerService.addCustomer(this.customer).subscribe
     (x => {
      this.msg = x;
    })

    }
  }

  ngOnInit(): void {
  }
}