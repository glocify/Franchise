import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http }                 from '@angular/http';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import {CustomerService} from './services/customer.service';
import {CommonService} from './services/common.service';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { ChartsModule }                     from 'ng2-charts';
import { CalendarModule }                   from 'angular-calendar';
import { NgxDatatableModule }               from '@swimlane/ngx-datatable';
import { AgmCoreModule }                    from '@agm/core';
import { SqueezeBoxModule }                 from 'squeezebox';

import { AppRoutingModule }                 from './app-routing.module';

import { AppComponent }                     from './app.component';
import { DefaultLayoutComponent }           from './layouts/default/default.component';
import { ExtraLayoutComponent }             from './layouts/extra/extra.component';

//A2 Components
import { NavbarComponent }                  from './a2-components/navbar/navbar.component';
import { SidebarComponent }                 from './a2-components/sidebar/sidebar.component';
import { LogoComponent }                    from './a2-components/logo/logo.component';
import { MainMenuComponent }                from './a2-components/main-menu/main-menu.component';
import { A2CardComponent }                  from './a2-components/card/card.component';
import { AlertComponent }                   from './a2-components/alert/alert.component';
import { BadgeComponent }                   from './a2-components/badge/badge.component';
import { BreadcrumbComponent }              from './a2-components/breadcrumb/breadcrumb.component';
import { FileComponent }                    from './a2-components/file/file.component';
import { NIHTimelineComponent }             from './a2-components/ni-h-timeline/ni-h-timeline.component';

//A2 Pages
import { PageDashboardComponent }           from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent }            from './pages/not-found/not-found.component';
import { FooterComponent }                  from './a2-components/footer/footer.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './pages/customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './pages/customer/customer-edit/customer-edit.component';
import { ProjectListComponent } from './pages/project/project-list/project-list.component';
import { ProjectAddComponent } from './pages/project/project-add/project-add.component';
import { ProjectEditComponent } from './pages/project/project-edit/project-edit.component';
import { CustomerViewComponent } from './pages/customer/customer-view/customer-view.component';
import { ProjectViewComponent } from './pages/project/project-view/project-view.component';



@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    CalendarModule.forRoot(),
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    SqueezeBoxModule
  ],
  declarations : [
    AppComponent,
    DefaultLayoutComponent,
    ExtraLayoutComponent,

    NavbarComponent,
    SidebarComponent,
    LogoComponent,
    MainMenuComponent,
    A2CardComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    FileComponent,
    NIHTimelineComponent,

    PageDashboardComponent,
    PageNotFoundComponent,
    FooterComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerViewComponent,	
    ProjectListComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    ProjectViewComponent,
  ],
  providers: [CustomerService, CommonService],
  entryComponents: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
