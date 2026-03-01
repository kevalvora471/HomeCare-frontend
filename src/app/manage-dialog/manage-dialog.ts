import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SERVICE_TYPES, Category, SubCategory } from '../services.data';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog';

export interface ManageDialogData {
  serviceTypeName: string;
}

@Component({
  selector: 'app-manage-dialog',
  standalone: true,
  imports: [],
  templateUrl: './manage-dialog.html',
  styleUrl: './manage-dialog.css'
})
export class ManageDialogComponent {

  dialogRef = inject<MatDialogRef<ManageDialogComponent>>(MatDialogRef);
  data      = inject<ManageDialogData>(MAT_DIALOG_DATA);
  dialog    = inject(MatDialog);

  private serviceData = SERVICE_TYPES.find(s => s.name === this.data.serviceTypeName);

  categories: Category[] = this.serviceData?.categories
    ? this.serviceData.categories.map(c => ({ ...c, subCategories: [...c.subCategories] }))
    : [];

  subCategories: SubCategory[] = this.categories[0]?.subCategories ?? [];
  selectedCategoryId: number   = this.categories[0]?.id ?? -1;

  selectCategory(cat: Category): void {
    this.selectedCategoryId = cat.id;
    this.subCategories = cat.subCategories;
  }

  addCategory(): void {
    const ref = this.dialog.open(AddItemDialogComponent, {
      data: { title: 'Add Category', placeholder: 'Category' },
      panelClass: 'add-item-dialog-panel',
      width: '560px',
      maxWidth: '95vw',
      autoFocus: true,
      disableClose: false
    });

    ref.afterClosed().subscribe((name: string | null) => {
      if (name) {
        const newCat: Category = { id: Date.now(), name, subCategories: [] };
        this.categories = [...this.categories, newCat];
        this.selectCategory(newCat);
      }
    });
  }

  addSubCategory(): void {
    const ref = this.dialog.open(AddItemDialogComponent, {
      data: { title: 'Add Sub Category', placeholder: 'Sub Category' },
      panelClass: 'add-item-dialog-panel',
      width: '560px',
      maxWidth: '95vw',
      autoFocus: true,
      disableClose: false
    });

    ref.afterClosed().subscribe((name: string | null) => {
      if (name) {
        const newSub: SubCategory = { id: Date.now(), name };
        this.subCategories = [...this.subCategories, newSub];
        const cat = this.categories.find(c => c.id === this.selectedCategoryId);
        if (cat) cat.subCategories = [...cat.subCategories, newSub];
      }
    });
  }

  deleteCategory(cat: Category, event: MouseEvent): void {
    event.stopPropagation();
    this.categories = this.categories.filter(c => c.id !== cat.id);
    if (this.selectedCategoryId === cat.id) {
      const next = this.categories[0];
      this.selectedCategoryId = next?.id ?? -1;
      this.subCategories = next?.subCategories ?? [];
    }
  }

  deleteSubCategory(sub: SubCategory): void {
    this.subCategories = this.subCategories.filter(s => s.id !== sub.id);
    const cat = this.categories.find(c => c.id === this.selectedCategoryId);
    if (cat) cat.subCategories = cat.subCategories.filter(s => s.id !== sub.id);
  }

  onCancel(): void { this.dialogRef.close(null); }
  onSave(): void   { this.dialogRef.close({ categories: this.categories }); }
}