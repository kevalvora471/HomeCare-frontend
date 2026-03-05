import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog';
import { ServicesApiService } from '../Services/service';
import { ToastrService } from 'ngx-toastr';
import { DeleteConfirmationDialog } from '../delete-confirmation-dialog/delete-confirmation-dialog';

export interface ManageDialogData {
  serviceTypeId: number;     // ✅ now we use ID
  serviceTypeName: string;
}

export interface Category {
  id: number;
  name: string;
  serviceTypeId: number
}

export interface SubCategory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-manage-dialog',
  standalone: true,
  imports: [],
  templateUrl: './manage-dialog.html',
  styleUrl: './manage-dialog.css'
})
export class ManageDialogComponent implements OnInit {

  dialogRef = inject<MatDialogRef<ManageDialogComponent>>(MatDialogRef);
  data = inject<ManageDialogData>(MAT_DIALOG_DATA);
  dialog = inject(MatDialog);
  private service = inject(ServicesApiService);
  private toastr = inject(ToastrService);
  categories: Category[] = [];
  subCategories: SubCategory[] = [];
  selectedCategoryId: number = -1;


  // Load categories when dialog opens
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.service.getCategoriesByServiceType(this.data.serviceTypeId)
      .subscribe({
        next: (res: Category[]) => {
          this.categories = res;
          console.log(res);
          if (this.categories.length > 0) {
            this.selectCategory(this.categories[0]);
          }
        },
        error: (err) => console.error(err)
      });
  }

  selectCategory(cat: Category): void {
    this.selectedCategoryId = cat.id;
    
    this.service.getSubCategoriesByCategory(cat.id)
      .subscribe({
        next: (res: SubCategory[]) => {
          this.subCategories = res;
        },
        error: (err) => console.error(err)
      });
  }


  addCategory(): void {
    const ref = this.dialog.open(AddItemDialogComponent, {
      data: { title: 'Add Category', placeholder: 'Category' },
      panelClass: 'add-item-dialog-panel',
      width: '560px',
      maxWidth: '95vw'
    });

    ref.afterClosed().subscribe((name: string | null) => {
      if (!name) return;

      this.service.createCategory({
        name: name,
        serviceTypeId: this.data.serviceTypeId
      }).subscribe({
        next: (newCategory) => {
          this.categories = [...this.categories, newCategory];
          this.selectedCategoryId = newCategory.id;
          this.subCategories = [];
          this.toastr.success('Category created successfully');
        },
        error: (err) => console.error(err)
      });
    });
  }

  addSubCategory(): void {
    if (this.selectedCategoryId === -1) return;

    const ref = this.dialog.open(AddItemDialogComponent, {
      data: { title: 'Add Sub Category', placeholder: 'Sub Category' },
      panelClass: 'add-item-dialog-panel',
      width: '560px',
      maxWidth: '95vw'
    });

    ref.afterClosed().subscribe((name: string | null) => {
      if (!name) return;

      this.service.createSubCategory({
        name: name,
        categoryId: this.selectedCategoryId
      }).subscribe({
        next: () => {
          // reload subcategories only
          const selected = this.categories.find(c => c.id === this.selectedCategoryId);
          if (selected) {
            this.selectCategory(selected);
          }

          this.toastr.success('Sub-Category created successfully');
        },
        error: (err) => console.error(err)
      });
    });
  }

  deleteCategory(cat: Category, event: MouseEvent): void {
    event.stopPropagation();

    // Open confirmation dialog
    this.dialog.open(DeleteConfirmationDialog, {
      width: '520px',
      data: {
        title: 'Delete Category',
        message: 'Are you sure you want to delete this category? All associated sub-categories will also be deleted.',
        itemName: cat.name,
        deleteButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        // User confirmed, proceed with delete
        this.service.deleteCategory(cat.id).subscribe({
          next: () => {
            // Remove from UI
            this.categories = this.categories.filter(c => c.id !== cat.id);

            // If deleted category was selected
            if (this.selectedCategoryId === cat.id) {
              if (this.categories.length > 0) {
                // Select first remaining category
                const first = this.categories[0];
                this.selectCategory(first);
              } else {
                // No categories left
                this.selectedCategoryId = -1;
                this.subCategories = [];
              }
            }

            this.toastr.success('Category deleted successfully');
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Failed to delete category');
          }
        });
      }
    });
  }

  deleteSubCategory(sub: SubCategory, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }

    // Open confirmation dialog
    this.dialog.open(DeleteConfirmationDialog, {
      width: '520px',
      data: {
        title: 'Delete Sub Category',
        message: 'Are you sure you want to delete this sub category?',
        itemName: sub.name,
        deleteButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        // User confirmed, proceed with delete
        this.service.deleteSubCategory(sub.id).subscribe({
          next: () => {
            // Remove from UI
            this.subCategories = this.subCategories.filter(s => s.id !== sub.id);
            this.toastr.success('Sub-Category deleted successfully');
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Failed to delete sub category');
          }
        });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSave(): void {
    this.dialogRef.close(true);
  }
}