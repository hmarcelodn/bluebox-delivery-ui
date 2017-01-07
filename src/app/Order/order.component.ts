import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../_Services/Customer.Service';
import { Customer } from '../_Model/Customer';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [CustomerService]
})

export class OrderComponent implements OnInit { 
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
