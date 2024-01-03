export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

// Type for filters - Assuming string filters for simplicity
type Filters<T> = {
  [key in keyof T]?: string;
};

// Generic sort function
export function genericSort<T>(
  array: T[],
  sortBy: keyof T,
  sortOrder: SortOrder
): T[] {
  return [...array].sort((a, b) => {
    if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
      const compareResult = (a[sortBy] as any).localeCompare(b[sortBy] as any);
      return sortOrder === SortOrder.Asc ? compareResult : -compareResult;
    } else if (
      (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') ||
      (a[sortBy] instanceof Date && b[sortBy] instanceof Date)
    ) {
      return sortOrder === SortOrder.Asc
        ? (a[sortBy] as any) - (b[sortBy] as any)
        : (b[sortBy] as any) - (a[sortBy] as any);
    }
    return 0;
  });
}

// Generic filter function
export function genericFilter<T>(array: T[], filters: Filters<T>): T[] {
  return array.filter((item) => {
    return Object.keys(filters).every((key) => {
      const filterKey = key as keyof T;
      const filterValue = filters[filterKey];
      return (
        !filterValue ||
        item[filterKey]
          ?.toString()
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    });
  });
}

// applyFilters() {
// this.filteredEmployees = this.employees.filter((employee) => {
//   const firstNameMatch =
//     !this.firstNameFilter ||
//     employee.first_name
//       .toLowerCase()
//       .includes(this.firstNameFilter.toLowerCase());
//   const lastNameMatch =
//     !this.lastNameFilter ||
//     employee.last_name
//       .toLowerCase()
//       .includes(this.lastNameFilter.toLowerCase());
//   const jobTitleMatch =
//     !this.jobTitleFilter ||
//     employee.job_title
//       .toLowerCase()
//       .includes(this.jobTitleFilter.toLowerCase());
//   return firstNameMatch && lastNameMatch && jobTitleMatch;
// });
// this.sortEmployees();
// this.totalEmployees = this.filteredEmployees.length;
// }

// sortEmployees() {
// this.filteredEmployees.sort((a: any, b: any) => {
//   if (typeof a[this.sortBy] === 'string') {
//     const compareResult = (a[this.sortBy] || '').localeCompare(
//       b[this.sortBy] || ''
//     );
//     return this.sortOrder === 'asc' ? compareResult : -compareResult;
//   } else if (
//     typeof a[this.sortBy] === 'number' ||
//     a[this.sortBy] instanceof Date
//   ) {
//     return this.sortOrder === 'asc'
//       ? a[this.sortBy] - b[this.sortBy]
//       : b[this.sortBy] - a[this.sortBy];
//   }
//   return 0;
// });
// }
