import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { EmployeeService } from 'src/app/service/employee.service';
import { LoadingService } from 'src/app/service/loading.service';
import { Employee } from 'src/app/interface/employee';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';
import { genericFilter, genericSort, SortOrder } from 'src/app/utils/utils';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  isLoading$ = this.loadingService.isLoading$;

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  totalEmployees: number;
  sortBy: string = 'updated_at';
  sortOrder: SortOrder = SortOrder.Desc;

  errorMessage: string | null = null;

  firstNameFilter = '';
  lastNameFilter = '';
  jobTitleFilter = '';

  constructor(
    private employeeService: EmployeeService,
    @Inject(APP_CONFIG) public config: AppConfig,
    private titleService: Title,
    private loadingService: LoadingService
  ) {
    this.titleService.setTitle(this.config.getPageTitle() + 'CRUD');
  }

  ngOnInit(): void {
    this.loadingService.showLoading();
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        this.employees = response;
        this.filteredEmployees = this.employees;
        // this.loadingService.hideLoading();
      },
      error: (error) => {
        this.errorMessage =
          'Failed to fetch employees. Please try again later.';
        console.error(error);
        // this.loadingService.hideLoading();
      },
    });
    if (this.employees) {
      this.loadingService.hideLoading();
    }
  }

  resetSortBy() {
    this.sortBy = 'updated_at';
    this.sortOrder = SortOrder.Desc;

    this.filteredEmployees = genericSort(
      this.filteredEmployees,
      this.sortBy,
      this.sortOrder
    );
  }

  sortEmployeesBy(sortBy: string) {
    this.sortOrder =
      sortBy === this.sortBy && this.sortOrder === SortOrder.Asc
        ? SortOrder.Desc
        : SortOrder.Asc;
    this.sortBy = sortBy;
    this.sortEmployees();
  }

  sortEmployees() {
    this.filteredEmployees = genericSort(
      this.filteredEmployees,
      this.sortBy,
      this.sortOrder
    );
  }

  applyFilters() {
    const filters = {
      first_name: this.firstNameFilter,
      last_name: this.lastNameFilter,
      job_title: this.jobTitleFilter,
    };
    this.filteredEmployees = genericFilter(this.employees, filters);
    this.sortEmployees();
    this.totalEmployees = this.filteredEmployees.length;
  }
}
