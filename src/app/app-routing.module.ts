import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { DefaultLayoutComponent }       from './layouts/default/default.component';
import { ExtraLayoutComponent }         from './layouts/extra/extra.component';

import { PageDashboardComponent }       from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent }        from './pages/not-found/not-found.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './pages/customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './pages/customer/customer-edit/customer-edit.component';
import { CustomerViewComponent } from './pages/customer/customer-view/customer-view.component';
import { ProjectListComponent } from './pages/project/project-list/project-list.component';
import { ProjectAddComponent } from './pages/project/project-add/project-add.component';
import { ProjectEditComponent } from './pages/project/project-edit/project-edit.component';
import { ProjectViewComponent } from './pages/project/project-view/project-view.component';


const defaultRoutes: Routes = [
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'customer/list', component: CustomerListComponent },
  { path: 'customer/add', component: CustomerAddComponent },
  { path: 'customer/:id/edit', component: CustomerEditComponent },
  { path: 'customer/:id/view', component: CustomerViewComponent },  
  { path: 'project/list', component: ProjectListComponent },
  { path: 'project/add', component: ProjectAddComponent },
  { path: 'project/:id/edit', component: ProjectEditComponent },     
  { path: 'project/:id/view', component: ProjectViewComponent },      
  { path: 'notfound', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/default-layout/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'default-layout',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
