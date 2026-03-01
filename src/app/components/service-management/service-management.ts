import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-service-management',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './service-management.html',
    styleUrl: './service-management.css'
})
export class ServiceManagementComponent {
    activeTab = 'full-home-cleaning';

    services = [
        {
            id: '70668',
            name: 'Classic full home cleaning (1 BHK)',
            subCategory: 'Furnished Apartment',
            price: 219.78,
            commission: '10%',
            availability: true
        },
        {
            id: '39635',
            name: 'Classic full home cleaning (2 BHK)',
            subCategory: 'Furnished Apartment',
            price: 589.99,
            commission: '10%',
            availability: true
        },
        {
            id: '22739',
            name: 'Unfurnished Living Room Cleaning (1 BHK)',
            subCategory: 'Unfurnished Apartment',
            price: 446.61,
            commission: '10%',
            availability: true
        },
        {
            id: '43178',
            name: 'Occupied Bedroom cleaning (1 BHK)',
            subCategory: 'Occupied Independent Apartment',
            price: 169.43,
            commission: '10%',
            availability: false
        }
    ];

    sidebarItems = [
        { name: 'Dashboard', icon: 'bi-grid', active: false },
        { name: 'Service Management', icon: 'bi-briefcase', active: true },
        { name: 'User Management', icon: 'bi-person', active: false },
        { name: 'Booking Management', icon: 'bi-calendar-check', active: false },
        { name: 'Offers', icon: 'bi-percent', active: false },
        { name: 'Payments & Transactions', icon: 'bi-credit-card', active: false },
        { name: 'Master Data', icon: 'bi-gear', active: false },
        { name: 'Support', icon: 'bi-headset', active: false }
    ];

    categoryTabs = [
        { id: 'full-home-cleaning', name: 'Full Home Cleaning', count: 40 },
        { id: 'bathroom-cleaning', name: 'Bathroom & Kitchen Cleaning', count: 40 },
        { id: 'sofa-cleaning', name: 'Sofa & carpet Cleaning', count: 40 }
    ];
}
