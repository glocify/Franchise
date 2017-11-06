import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CustomerService {

    constructor(private http:Http) {
    }

    getCustomers() {
        return this.http.get('http://localhost:8000/api/v1/customer').map((res:Response) => res.json());
    }

}
