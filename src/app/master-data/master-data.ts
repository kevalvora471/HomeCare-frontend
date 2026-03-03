import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ManageDialogComponent } from '../manage-dialog/manage-dialog';
import { SERVICE_TYPES, ServiceType } from '../services.data';

@Component({
  selector: 'app-master-data',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './master-data.html',
  styleUrl: './master-data.css'
})
export class MasterDataComponent {

  constructor(private dialog: MatDialog) {}

  services: ServiceType[] = SERVICE_TYPES;

  openMenuIndex: number = -1;

  onMenuClick(index: number): void {
    this.openMenuIndex = this.openMenuIndex === index ? -1 : index;
  }

  closeMenu(): void {
    this.openMenuIndex = -1;
  }

  onManage(service: ServiceType): void {
    this.closeMenu();
    this.dialog.open(ManageDialogComponent, {
      data: { 
        serviceTypeId: service.id,
        serviceTypeName: service.name 
      },
      panelClass: 'manage-dialog-panel',
      width: '800px',
      height: '516px',
      maxWidth: '95vw',
      disableClose: false
    });
  }

  onEdit(service: ServiceType): void {
    console.log('Edit:', service.name);
    this.closeMenu();
  }

  onDelete(service: ServiceType): void {
    console.log('Delete:', service.name);
    this.closeMenu();
  }

  addService(): void {
    console.log('Add service');
  }
}