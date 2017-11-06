import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { CustomerService } from '../../../services/customer.service';
import { CommonService } from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  pageTitle: string = 'View Customer';
  customer: any[];
  constructor(private _sharedService: SharedService, private _customerService: CustomerService,
    private _commonService: CommonService ,private router: Router, private route: ActivatedRoute) {
		this._sharedService.emitChange(this.pageTitle);
	}
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
          const id = +params['id'];
          this.getCustomer(id);
      }
    );	  
  }
  getCustomer(id: number): void {
    this._customerService.getCustomer(id)
    .subscribe((data) => {
        if (data.id > 0) {
          this.customer = data;
          this._commonService.getCountry(this.customer['Country'])
          .subscribe((country) =>{
            if(country.id > 0) {
              this.customer['Country'] = country.Name;
            }
          });
          this._commonService.getRegion(this.customer['Region'])
          .subscribe((region) =>{
            if(region.id > 0) {
              this.customer['Region'] = region.Name;
            }
          });
        }else{
          this.router.navigate(['/default-layout/notfound']);
        }
    });
  }
  getCountryName(id: number){
    console.log('test');
  }
}
