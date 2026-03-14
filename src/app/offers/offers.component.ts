import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Offer, offers } from '../data/offers.data';
import { OfferDialogComponent } from './offer-dialog/offer-dialog.component';
import { OfferFilterDialogComponent, OfferFilterData } from './offer-filter-dialog/offer-filter-dialog.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatMenuModule, MatDialogModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  displayedColumns: string[] = ['code', 'description', 'discount', 'applied', 'status', 'action'];
  originalDataSource = offers;
  dataSource = [...this.originalDataSource];

  // pagination placeholder
  rowsPerPage = 10;
  currentPage = 1;
  totalItems = 100;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(OfferFilterDialogComponent, {
      width: '400px',
      height: '100vh',
      position: { right: '0', top: '0' },
      panelClass: 'right-sliding-dialog',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: OfferFilterData) => {
      if (result) {
        this.dataSource = this.originalDataSource.filter(offer => {
          let match = true;

          // Discount text filter
          if (result.discount && !offer.discount.includes(result.discount)) {
            match = false;
          }

          // Active status filter
          const targetStatus = result.isActive ? 'Active' : 'Inactive';
          if (offer.status !== targetStatus) {
            match = false;
          }

          // Advanced applied count parsed filtering
          const offerApplied = parseInt(offer.applied.replace(/,/g, ''), 10);
          if (result.appliedMin !== undefined && result.appliedMax !== undefined) {
            if (offerApplied < result.appliedMin || offerApplied > result.appliedMax) {
              match = false;
            }
          }

          return match;
        });
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(OfferDialogComponent, {
      width: '450px',
      panelClass: 'custom-dialog-container',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Pseudo-add for demonstration
        this.dataSource = [result, ...this.dataSource];
      }
    });
  }

  openEditDialog(offer: Offer): void {
    const dialogRef = this.dialog.open(OfferDialogComponent, {
      width: '450px',
      panelClass: 'custom-dialog-container',
      data: { mode: 'edit', offer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Pseudo-update for demonstration
        const index = this.dataSource.findIndex(o => o.code === offer.code);
        if (index > -1) {
          this.dataSource[index] = result;
          // Trigger change detection for table
          this.dataSource = [...this.dataSource];
        }
      }
    });
  }
}
