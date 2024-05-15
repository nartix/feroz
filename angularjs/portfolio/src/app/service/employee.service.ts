import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Employee } from '../interface/employee';
import { environment as env } from '../../../globals';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = env.EXPRESSJS_URL + '/employees';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl).pipe(
      retry(2), // retry a failed request up to 2 times
      catchError(this.handleError) // then handle the error
    );
  }

  getEmployee(employee_id: Number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${employee_id}`).pipe(
      retry(2), // retry a failed request up to 2 times
      catchError(this.handleError) // then handle the error
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee).pipe(
      retry(2), // retry a failed request up to 2 times
      catchError(this.handleError) // then handle the error
    );
  }

  deleteEmployee(employee_id: Number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUrl}/${employee_id}`).pipe(
      retry(2), // retry a failed request up to 2 times
      catchError(this.handleError) // then handle the error
    );
  }

  editEmployee(employee: Employee, employee_id: Number): Observable<Employee> {
    return this.http
      .patch<Employee>(`${this.apiUrl}/${employee_id}`, employee)
      .pipe(
        retry(2), // retry a failed request up to 2 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error, error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('An error occurred:' + error.message));
  }
}
