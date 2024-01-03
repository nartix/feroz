export interface Employee {
  employee_id?: number;
  first_name: string;
  last_name: string;
  job_title: string;
  errors?: any;
  [key: string]: string | number | undefined;
}
