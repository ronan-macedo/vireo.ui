import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Client } from '../../shared/models/client.model';
import { ApiService } from '../../core/services/api.service';
import { ClientResponse } from '../../shared/models/response/client.response.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feature-clients-dashboard',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, CommonModule],
  templateUrl: './clients-dashboard.component.html',
  styleUrl: './clients-dashboard.component.scss'
})
export class ClientsDashboardComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'lastServiceDate'];
  dataSource = new MatTableDataSource<Client>();
  errorMessage: string = '';
  pageSizeOptions: number[] = [10, 50, 100];
  totalCount: number = 0;
  pageNumber: number = 0;
  pageSize: number = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly _apiService: ApiService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(pageNumber: number = 1, pageSize: number = 10): void {
    this._apiService.getClients(pageNumber, pageSize).subscribe({
      next: (response: ClientResponse) => {
        this.dataSource.data = response.items;
        this.dataSource.paginator = this.paginator;
        this.totalCount = response.totalCount;
        this.pageNumber = response.pageNumber - 1;
        this.pageSize = response.pageSize;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  onPageChange(event: any): void {
    this.loadClients(event.pageIndex + 1, event.pageSize);
  }
}
