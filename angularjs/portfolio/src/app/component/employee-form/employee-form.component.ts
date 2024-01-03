import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  AbstractControl,
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Employee } from 'src/app/interface/employee';
import { noWhiteSpaceValidator } from 'src/app/form-validators/nowhitespace.validator';
import { EmployeeService } from 'src/app/service/employee.service';
import { LoadingService } from 'src/app/service/loading.service';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  isLoading$ = this.loadingService.isLoading$;
  employeeForm = this.fb.group({
    first_name: [
      '',
      [Validators.required, Validators.minLength(1), noWhiteSpaceValidator],
    ],
    last_name: [
      '',
      [Validators.required, Validators.minLength(1), noWhiteSpaceValidator],
    ],
    job_title: [
      '',
      [Validators.required, Validators.minLength(1), noWhiteSpaceValidator],
    ],
  });

  // or editEmployee
  isEditForm: boolean;
  employee_id: Number;

  employeeNotFound: boolean;
  apiError: boolean;

  errorMsg = 'This field cannot be empty';

  fieldErrors: { [key: string]: boolean } = { job_title: false };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private titleService: Title,
    @Inject(APP_CONFIG) public config: AppConfig,
    public loadingService: LoadingService
  ) {
    this.isEditForm = false;
    this.employee_id = 0;
    this.employeeNotFound = false;
    this.apiError = false;
  }

  ngOnInit(): void {
    this.loadingService.showLoading();

    this.employee_id = +this.route.snapshot.paramMap.get('employee_id')!;
    this.isEditForm = !!this.employee_id;

    this.updatePageTitle();

    if (this.isEditForm) {
      // Fetch the employee data from the API
      this.employeeService.getEmployee(this.employee_id).subscribe({
        next: (employee: Employee) => {
          if (employee.employee_id) {
            // Update the form with the employee data
            this.employeeForm.patchValue(employee);
          } else {
            this.employeeNotFound = true;
          }
          this.loadingService.hideLoading();
        },
        error: (error) => {
          this.apiError = true;
          console.error('Error fetching employee data =', error);
          this.loadingService.hideLoading();
        },
      });
    } else {
      this.loadingService.hideLoading();
    }
  }

  private updatePageTitle() {
    const baseTitle = this.config.getPageTitle();
    let pageTitle = 'CRUD | Create Employee';
    if (this.isEditForm) {
      pageTitle = `CRUD | Edit Employee | ${this.employee_id}`;
    }

    this.titleService.setTitle(baseTitle + pageTitle);
  }

  onSubmit() {
    // Check if the form is valid
    if (this.employeeForm.valid) {
      // Get the form data
      const employee: Employee = this.employeeForm.value as Employee;

      if (this.isEditForm) {
        // Update the employee data
        this.employeeService
          .editEmployee(employee, this.employee_id)
          .subscribe({
            next: (response) => {
              // Navigate to the employee list page
              this.router.navigate(['/crud']);
            },
            error: (error) => {
              console.error(error);
            },
          });
      } else {
        // Create a new employee
        this.employeeService.createEmployee(employee).subscribe({
          next: (response) => {
            // Navigate to the employee list page
            this.router.navigate(['/crud']);
          },
          error: (error) => {
            console.error(error);
          },
        });
      }
    }
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee_id).subscribe({
      next: (response) => {
        // Navigate to the employee list page
        this.router.navigate(['/crud']);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  isFormFieldInvalid(formControl: AbstractControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
