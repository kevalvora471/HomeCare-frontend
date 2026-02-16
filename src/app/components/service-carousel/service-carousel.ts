import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-service-carousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './service-carousel.html',
    styleUrl: './service-carousel.css'
})
export class ServiceCarouselComponent implements OnInit {
    @Input() title: string = '';
    @Input() services: any[] = [];
    @Input() itemsPerView: number = 5;
    currentIndex = 0;

    ngOnInit() {
        this.updateItemsPerView();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.updateItemsPerView();
    }

    updateItemsPerView() {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width > 1024) {
                this.itemsPerView = 5;
            } else if (width > 768) {
                this.itemsPerView = 3;
            } else if (width > 480) {
                this.itemsPerView = 2;
            } else {
                this.itemsPerView = 1;
            }

            // Adjust currentIndex if valid range changes
            const maxIndex = Math.max(0, this.services.length - this.itemsPerView);
            if (this.currentIndex > maxIndex) {
                this.currentIndex = maxIndex;
            }
        }
    }

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
