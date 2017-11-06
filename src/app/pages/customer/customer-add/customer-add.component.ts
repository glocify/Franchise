import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedService } from '../../../layouts/shared-service';
import {CustomerService} from '../../../services/customer.service';
import {CommonService} from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  result: string;
  pageTitle: string = 'Add Customer';
  public form: FormGroup;
  countries: string;
  regions: string;

  constructor( private fb: FormBuilder, private _sharedService: SharedService,
    private _customerService: CustomerService, private _commonService: CommonService,
    private router: Router, private route: ActivatedRoute) {
    this._sharedService.emitChange(this.pageTitle);
    this._commonService.getCountries().subscribe(
      data => { this.countries = data},
      err => console.error(err)
    );
   }

  ngOnInit() {
    this.form = this.fb.group({
      FirstName: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      LastName: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      Age: [null, Validators.required],
      Street: [null, Validators.required],
      Building: [null, Validators.required],
      Country: [null, Validators.required],
      Region: [null, Validators.required],
      City: [null, Validators.required],
      PostalCode: [null, Validators.required],
      Email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      Phone: [null, Validators.required],
      Mobile: [null, Validators.required],
      ContactType: [null, Validators.required],
      Description: [null, Validators.required],
      BillingInformation: [null, Validators.required],
      Gender: [null, Validators.required],
    });
  }
  onSubmit() {
   this._customerService.addCustomers(this.form.value).subscribe((data) => {
      if(data.status === 'success'){
        this.result = 'Customer Successfully Updated';
        setTimeout(() => { this.router.navigate(['/default-layout/customer/list']); }, 800);;
      }else{
        this.result = 'Something went wrong. Please try again later.';
      }
   });
  }
  setRegion(country) {
    this._commonService.getRegions(country.value).subscribe(
      data => { this.regions = data},
      err => console.error(err)
    );
  }
}
