import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Config} from '../config/config';

@Injectable()
export class ProjectService {
    constructor(private http:Http) {
    }
    getProjects() {
        return this.http.get(Config.api_root + 'project').map((res:Response) => res.json());
    }
    getProject(id){
      return this.http.get(Config.api_root + 'project/' + id).map((res:Response) => res.json())
    }
    addProject(data) {
      let body = JSON.stringify(data);
      let headers = new Headers({ 'Content-Type': 'application/json', 'Accept':'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(Config.api_root + 'project', body, options).map((res:Response) => res.json());
    }
    updateProject(id, data) {
      let body = JSON.stringify(data);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(Config.api_root + 'project/' + id, body, options).map((res:Response) => res.json());
    }
    getBuildingtypes() {
        return this.http.get(Config.api_root + 'buildingtype').map((res:Response) => res.json());
    }
    getBuildingtype(id){
      return this.http.get(Config.api_root + 'buildingtype/' + id).map((res:Response) => res.json())
    }	
    getProjecttypes() {
      return this.http.get(Config.api_root + 'projecttype').map((res:Response) => res.json());
    }
    getProjecttype(id){
      return this.http.get(Config.api_root + 'projecttype/' + id).map((res:Response) => res.json())
    }	    
}
