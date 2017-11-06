import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Config} from '../config/config';

@Injectable()
export class CommonService {
    constructor(private http:Http) {
    }

    getCountries() {
        return this.http.get(Config.api_root + 'country').map((res:Response) => res.json());
    }
	getCountry(id){
		return this.http.get(Config.api_root + 'country/' + id).map((res:Response) => res.json());
    }
    getRegion(id){
        return this.http.get(Config.api_root + 'country/region/' + id).map((res:Response) => res.json())
    }
    getRegions(id){
      return this.http.get(Config.api_root + 'country/regions/' + id).map((res:Response) => res.json())
    }
}
