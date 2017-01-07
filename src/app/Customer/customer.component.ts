import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CustomerService } from '../_Services/Customer.Service';
import { Customer } from '../_Model/Customer';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})

export class CustomerComponent implements OnInit { 
  customers: Customer[];

  constructor(private customerService: CustomerService){
    
  }

  ngOnInit():void{
    this.getCustomers();
  }
  
  getCustomers(){
    this.customerService.getCustomers()
                        .subscribe(
                            customers => this.customers = customers
                        );
  }

}
