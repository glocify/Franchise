import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import {enableProdMode} from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import { RouterLink } from '@angular/router';

enableProdMode();
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  pageTitle: string = 'Customer List';
  columns = [
    { name: 'FirstName', prop: 'FirstName' },
    { name: 'LastName', prop: 'LastName' },
    { name:'action', prop: 'id' }
  ];
  rows = [];
  loadingIndicator: boolean = true;

  constructor( private _sharedService: SharedService, private _customerService: CustomerService ) {
    this._customerService.getCustomers().subscribe(
      data => { this.rows = data},
      err => console.error(err),
      () => setTimeout(() => { this.loadingIndicator = false; }, 1500)
    );
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
  }
  editCustomer(id) {
    // this.router.navigateByUrl('/details/' + row.id);
  }
}
