import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import {enableProdMode} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import { RouterLink } from '@angular/router';

enableProdMode();
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  pageTitle: string = 'Project List';
  columns = [
    { name: 'Name', prop: 'Name' },
    { name: 'action', prop: 'id' }
  ];
  rows = [];
  loadingIndicator: boolean = true;

  constructor( private _sharedService: SharedService, private _projectService: ProjectService ) {
    this._projectService.getProjects().subscribe(
      data => { this.rows = data},
      err => console.error(err),
      () => setTimeout(() => { this.loadingIndicator = false; }, 1500)
    );
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
  }
}
