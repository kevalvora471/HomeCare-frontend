import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Offer } from '../../data/offers.data';

export interface OfferDialogData {
  offer?: Offer;
  mode: 'add' | 'edit';
}

@Component({
  selector: 'app-offer-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './offer-dialog.component.html',
  styleUrl: './offer-dialog.component.css'
})
export class OfferDialogComponent implements OnInit {
  offerForm!: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OfferDialogData
  ) {
    this.isEditMode = this.data.mode === 'edit';
  }

  ngOnInit(): void {
    const existingOffer = this.data.offer;
    // For discount, we want to strip out the "% Off" or "+30% Off" phrasing in edit mode if needed, 
    // but based on UI mock, it shows just "10" for the number. Let's parse out numbers for simplicity,
    // or keep the string if it's too complex. The design shows a plain number, e.g "10".

    let rawDiscount = '';
    if (existingOffer?.discount) {
      // Extract just the number from e.g., "10% Off", "+30% Off"
      const match = existingOffer.discount.match(/\d+/);
      rawDiscount = match ? match[0] : '';
    }

    this.offerForm = this.fb.group({
      code: [existingOffer?.code || '', Validators.required],
      description: [existingOffer?.description || '', Validators.required],
      discount: [rawDiscount, Validators.required],
      status: [existingOffer?.status || 'Active', Validators.required]
    });
  }

  onSave(): void {
    if (this.offerForm.valid) {
      const formVal = this.offerForm.value;
      // Reconstruct proper format if applying changes back to main list
      const savedOffer: Offer = {
        code: formVal.code,
        description: formVal.description,
        discount: `${formVal.discount}% Off`,
        // In a real app we'd keep track of applied counts, or default to 0
        applied: this.data.offer?.applied || '0 Times',
        status: formVal.status
      };

      this.dialogRef.close(savedOffer);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
