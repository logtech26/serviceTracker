import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface EmployeeProfile {
  fullname: string;
  title: string;
  jobType: string;
  status: string;
  projectNumber: number;
  timesheet: string;
  yearlySalary?: number;
  hourlyRate?: number;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements AfterViewInit {
  constructor(private router: Router) {}

  displayedColumns: string[] = [
    'fullname',
    'title',
    'jobType',
    'status',
    'projectNumber',
    'timesheet',
    'pay',
  ];
  dataSource = new MatTableDataSource<EmployeeProfile>(Emp_Data_storage);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navogateToProfile() {
    this.router.navigate(['/profile']);
  }

  getPayInfo(employee: EmployeeProfile): { value: number; type: string } {
    switch (employee.jobType) {
      case 'Full-time':
        return { value: 1200000, type: 'yearly' };

      case 'Part-time':
        return { value: 50, type: 'hourly' };

      case 'Contractor':
        return { value: 60, type: 'hourly' };

      default:
        return { value: 0, type: '' };
    }
  }
}

const Emp_Data_storage: EmployeeProfile[] = [
  {
    fullname: 'John marc',
    title: 'Software Engineer',
    jobType: 'Full-time',
    status: 'Active',
    projectNumber: 12345,
    timesheet: 'Submitted',
    yearlySalary: 1200000,
  },
  {
    fullname: 'Sarah Lee',
    title: 'Product Manager',
    jobType: 'Part-time',
    status: 'Inactive',
    projectNumber: 67890,
    timesheet: 'Pending',
    hourlyRate: 45.0,
  },
  {
    fullname: 'Michael Chen',
    title: 'UX Designer',
    jobType: 'Contractor',
    status: 'Active',
    projectNumber: 54321,
    timesheet: 'Submitted',
    hourlyRate: 60.0,
  },
  {
    fullname: 'Emily Davis',
    title: 'Data Analyst',
    jobType: 'Full-time',
    status: 'Active',
    projectNumber: 98765,
    timesheet: 'Pending',
    yearlySalary: 1200000,
  },
  {
    fullname: 'David Wilson',
    title: 'DevOps Engineer',
    jobType: 'Full-time',
    status: 'Inactive',
    projectNumber: 24680,
    timesheet: 'Submitted',
    yearlySalary: 1200000,
  },
  {
    fullname: 'Jessica Brown',
    title: 'Marketing Specialist',
    jobType: 'Part-time',
    status: 'Active',
    projectNumber: 13579,
    timesheet: 'Pending',
    hourlyRate: 40.0,
  },
  {
    fullname: 'Daniel Lee',
    title: 'Sales Manager',
    jobType: 'Contractor',
    status: 'Active',
    projectNumber: 11223,
    timesheet: 'Submitted',
    hourlyRate: 65.0,
  },
  {
    fullname: 'Olivia Smith',
    title: 'HR Coordinator',
    jobType: 'Full-time',
    status: 'Inactive',
    projectNumber: 33445,
    timesheet: 'Pending',
    yearlySalary: 1200000,
  },
  {
    fullname: 'James Anderson',
    title: 'Financial Analyst',
    jobType: 'Part-time',
    status: 'Active',
    projectNumber: 55667,
    timesheet: 'Submitted',
    hourlyRate: 50.0,
  },
  {
    fullname: 'Sophia Martinez',
    title: 'Customer Support Specialist',
    jobType: 'Contractor',
    status: 'Active',
    projectNumber: 77889,
    timesheet: 'Pending',
    hourlyRate: 55.0,
  },
];
