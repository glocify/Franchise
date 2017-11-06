import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ProjectService } from '../../../services/project.service';
import { CustomerService } from '../../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
  providers: [ProjectService]
})
export class ProjectViewComponent implements OnInit {
  pageTitle: string = 'View Project';
  project: any[];
  constructor(private _sharedService: SharedService, private _projectService: ProjectService,
    private _customerService: CustomerService,  private router: Router, private route: ActivatedRoute) {
		this._sharedService.emitChange(this.pageTitle);
	}
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
          const id = +params['id'];
          this.getProject(id);
      }
    );	  
  }
  getProject(id: number): void {
    this._projectService.getProject(id)
    .subscribe((data) => {
        if (data.id > 0) {
          this.project = data;
          this._customerService.getCustomer(this.project['Contact'])
          .subscribe((contact) => {
            if(contact.id > 0){
              this.project['Contact'] = contact.FirstName+' '+contact.LastName;
            }
          });
          this._projectService.getBuildingtype(this.project['BuildingType'])
          .subscribe((building) => {
            if(building.id > 0){
              this.project['BuildingType'] = building.Name;
            }
          });   
          this._projectService.getProjecttype(this.project['Type'])
          .subscribe((type) => {
            if(type.id > 0){
              this.project['Type'] = type.Name;
            }
          });                   
        }else{
          this.router.navigate(['/default-layout/notfound']);
        }
    });
  }  
}
