import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

export interface AddItemDialogData {
  title: string;       // 'Add Category' or 'Add Sub Category'
  placeholder: string; // 'Category' or 'Sub Category'
}

@Component({
  selector: 'app-add-item-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item-dialog.html',
  styleUrl: './add-item-dialog.css'
})
export class AddItemDialogComponent {

  dialogRef = inject<MatDialogRef<AddItemDialogComponent>>(MatDialogRef);
  data = inject<AddItemDialogData>(MAT_DIALOG_DATA);

  inputValue: string = '';

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSave(): void {
    const trimmed = this.inputValue.trim();
    if (trimmed) {
      this.dialogRef.close(trimmed);
    }
  }
}