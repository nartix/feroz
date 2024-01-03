import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { CrudComponent } from './component/crud/crud.component';
import { EmployeeCreateComponent } from './component/employee-create/employee-create.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { CiCdComponent } from './component/ci-cd/ci-cd.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { APP_CONFIG, APP_CONFIG_DATA } from './app.config';
import { LoadingComponent } from './component/loading/loading.component';
import { EmployeeTableHeaderComponent } from './component/employee-table-header/employee-table-header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'ci-cd', component: CiCdComponent },
  { path: 'employees/create', component: EmployeeCreateComponent },
  { path: 'employees/edit/:employee_id', component: EmployeeCreateComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    CrudComponent,
    EmployeeCreateComponent,
    EmployeeFormComponent,
    CiCdComponent,
    PageNotFoundComponent,
    LoadingComponent,
    EmployeeTableHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: APP_CONFIG, useValue: APP_CONFIG_DATA }],
  bootstrap: [AppComponent],
})
export class AppModule {}
