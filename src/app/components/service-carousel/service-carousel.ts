import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-service-carousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './service-carousel.html',
    styleUrl: './service-carousel.css'
})
export class ServiceCarouselComponent {
    @Input() title: string = '';
    @Input() services: any[] = [];
    @Input() itemsPerView: number = 5;
    currentIndex = 0;

    next() {
        if (this.currentIndex < this.services.length - this.itemsPerView) {
            this.currentIndex++;
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
}
