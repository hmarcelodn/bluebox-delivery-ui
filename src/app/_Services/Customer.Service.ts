import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Customer } from '../_Model/Customer';

@Injectable()
export class CustomerService{
    private customersUrl = "http://localhost:5001/customers";

    constructor(private http: Http){ }

    getCustomers(): Observable<Customer[]> {
        return this.http.get(this.customersUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    private extractData(res: Response){
        let data = res.json();    

        return data || { };
    }

    private handleError(error:Response | any){
        console.log('handleError');
        return Observable.throw(error);
    }

}