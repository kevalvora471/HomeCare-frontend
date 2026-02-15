import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-category-carousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './category-carousel.html',
    styleUrl: './category-carousel.css'
})
export class CategoryCarouselComponent {
    @Input() categories: any[] = [];
    currentIndex = 0;

    next() {
        if (this.currentIndex < this.categories.length - 6) {
            this.currentIndex++;
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
}