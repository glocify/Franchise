import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedService } from '../../../layouts/shared-service';
import {ProjectService} from '../../../services/project.service';
import {CustomerService} from '../../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
  providers: [ProjectService]
})
export class ProjectAddComponent implements OnInit {
  result: string;
  customers: any[];
  buildingtypes: any[];
  projecttypes: any[];  
  pageTitle: string = 'Add Project';
  public form: FormGroup;


  constructor( private fb: FormBuilder, private _sharedService: SharedService,
    private _projectService: ProjectService,  private _customerService: CustomerService,
    private router: Router, private route: ActivatedRoute) {
    this._sharedService.emitChange(this.pageTitle);
    this._customerService.getCustomers().subscribe(
      data => { this.customers = data},
      err => console.error(err)
    );    
    this._projectService.getBuildingtypes().subscribe(
      data => { this.buildingtypes = data},
      err => console.error(err)
    ); 
    this._projectService.getProjecttypes().subscribe(
      data => { this.projecttypes = data },
      err => console.error(err)
    );          
   }

   ngOnInit() {
    this.form = this.fb.group({
      Name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      FranchiseId: ['1'],
      Status: [null, Validators.required],
      Type: [null, Validators.required],
      Company: [null, Validators.required],
      Contact: [null, Validators.required],
      Location: [null, Validators.required],
      BuildingType: [null, Validators.required],
      Description: [null, Validators.required],
      SizeInM2: [null, Validators.required],
      Tags: [null, Validators.required],
      Roofs: [null, Validators.required]
    });
  }
  onSubmit() {
    this._projectService.addProject(this.form.value).subscribe((data) => {
       if(data.status === 'success'){
         this.result = 'Project Successfully Added';
         setTimeout(() => { this.router.navigate(['/default-layout/project/list']); }, 800);;
       }else{
         this.result = 'Something went wrong. Please try again later.';
       }
    });
   }
}
