import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Config} from '../config/config';

@Injectable()
export class CustomerService {
    constructor(private http:Http) {
    }

    getCustomers() {
        return this.http.get(Config.api_root + 'customer').map((res:Response) => res.json());
    }
    getCustomer(id){
      return this.http.get(Config.api_root + 'customer/' + id).map((res:Response) => res.json())
    }
    addCustomers(data) {
      let body = JSON.stringify(data);
      let headers = new Headers({ 'Content-Type': 'application/json', 'Accept':'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(Config.api_root + 'customer', body, options).map((res:Response) => res.json());
    }
    updateCustomers(id, data) {
      let body = JSON.stringify(data);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(Config.api_root + 'customer/' + id, body, options).map((res:Response) => res.json());
    }
}
