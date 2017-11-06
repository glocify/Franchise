import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedService } from '../../../layouts/shared-service';
import {CustomerService} from '../../../services/customer.service';
import {CommonService} from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  pageTitle: string = 'Edit Customer';
  result: string;
  customer: string;
  regions: any[];
  countries: any[];
  public form: FormGroup;
  constructor(private fb: FormBuilder, private _sharedService: SharedService, private _customerService: CustomerService,
    private router: Router, private route: ActivatedRoute, private _commonService: CommonService) {
      this._sharedService.emitChange(this.pageTitle);
      this._commonService.getCountries().subscribe(
        data => { this.countries = data},
        err => console.error(err)
      );
    }

  ngOnInit(): void  {
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
          this._commonService.getRegions(data.Country).subscribe(
            response => {
                this.regions =  response;
            },
            err => { console.error(err) }
          );
          this.customer = data.id;
          this.form.setValue({
            FirstName: data.FirstName,
            LastName: data.LastName,
            Gender: data.Gender,
            Age: data.Age,
            Street: data.Street,
            Building: data.Building,
            PostalCode: data.PostalCode,
            Country: data.Country,
            Region: data.Region,
            City: data.City,
            Email: data.Email,
            Phone: data.Phone,
            Mobile: data.Mobile,
            ContactType: data.ContactType,
            Description: data.Description,
            BillingInformation: data.BillingInformation
          });
        }else{
          this.router.navigate(['/default-layout/notfound']);
        }
    });
/*    this._customerService.getCustomer(id).subscribe(
      data => {
        this.form.setValue({
        FirstName: data.FirstName,
        LastName: data.LastName,
        Gender: data.Gender,
        Age: data.Age,
        Street: data.Street,
        Building: data.Building,
        PostalCode: data.PostalCode,
        Country: data.Country,
        Region: data.Region,
        City: data.City,
        Email: data.Email,
        Phone: data.Phone,
        Mobile: data.Mobile,
        ContactType: data.ContactType,
        Description: data.Description,
        BillingInformation: data.BillingInformation
      });
    },
      err => console.error(err),
      () => console.log('done')
    ); */
  }
  onSubmit() {
    this._customerService.updateCustomers(this.customer, this.form.value).subscribe((data) => {
      if(data.status === 'success'){
        this.result = 'Customer information successfully updated.';
        setTimeout(() => { this.router.navigate(['/default-layout/customer/list']); }, 800);
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
