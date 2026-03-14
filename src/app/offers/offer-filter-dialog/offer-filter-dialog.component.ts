import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export interface OfferFilterData {
  discount?: string;
  appliedMin?: number;
  appliedMax?: number;
  isActive?: boolean;
}

@Component({
  selector: 'app-offer-filter-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  templateUrl: './offer-filter-dialog.component.html',
  styleUrl: './offer-filter-dialog.component.css'
})
export class OfferFilterDialogComponent {
  filterForm: FormGroup;

  // Slider bounds based on mockup 0 -> 99,999
  sliderMin = 0;
  sliderMax = 99999;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OfferFilterDialogComponent>
  ) {
    this.filterForm = this.fb.group({
      discount: [''],
      appliedMin: [0],
      appliedMax: [99999],
      isActive: [true] // Defaulting to True as per mockup visually
    });
  }

  // Helper getters for template display
  get appliedMinVal() { return this.filterForm.get('appliedMin')?.value; }
  get appliedMaxVal() { return this.filterForm.get('appliedMax')?.value; }

  // Format utility for tooltips like "5,500"
  formatLabel(value: number): string {
    return value.toLocaleString('en-US');
  }

  onFilter(): void {
    const filterData: OfferFilterData = this.filterForm.value;
    this.dialogRef.close(filterData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
