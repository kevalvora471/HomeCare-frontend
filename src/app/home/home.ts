import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCarouselComponent } from '../components/category-carousel/category-carousel';
import { NavbarComponent } from '../components/navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CategoryCarouselComponent, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  categories = [
    { name: "Women's Salon & Spa", icon: "/make-up.png" },
    { name: "Men's Salon & Massage", icon: "/barber.png" },
    { name: "Ac & Appliance Repair", icon: "/ac-repair.png" },
    { name: "Cleaning", icon: "/cleaning.png" },
    { name: "Electrician, Plumber & Carpenter", icon: "/tools.png" },
    { name: "Painting & Water Proofing", icon: "/paint-roller.png" },
    { name: "Pest Control", icon: "/pest-control.png" },
    { name: "Home Painting", icon: "/painting.png" },
    { name: "Bathroom & Kitchen Cleaning", icon: "/cleaning-supply.png" },
    { name: "Appliance Repair", icon: "/repair-tool.png" },
    { name: "Packers & Movers", icon: "/moving-truck.png" },
    { name: "Home Painting", icon: "/painting.png" },
    { name: "Bathroom & Kitchen Cleaning", icon: "/cleaning-supply.png" },
    { name: "Appliance Repair", icon: "/repair-tool.png" },
    { name: "Packers & Movers", icon: "/moving-truck.png" },
    { name: "Wall Decor", icon: "/wall-art.png" }
  ];

  popularServices = [
    {
      name: "Sofa Cleaning",
      rating: 4.8,
      reviews: "1.2k",
      price: 499,
      image: "/sofa-cleaning.jpg"
    },
    {
      name: "AC Repair & Service",
      rating: 4.9,
      reviews: "2.5k",
      price: 299,
      image: "/ac-repair.jpg"
    },
    {
      name: "Full Home Cleaning",
      rating: 4.7,
      reviews: "3k",
      price: 1999,
      image: "/home-cleaning.jpg"
    },
    {
      name: "Bathroom Cleaning",
      rating: 4.9,
      reviews: "800",
      price: 399,
      image: "/bathroom-cleaning.jpg"
    }
  ];

  applianceServices = [
    {
      name: "Fully Automatic Machine Checkup",
      duration: "45 mins",
      price: 199,
      features: ["Up to 30 days warranty", "Genuine spare parts", "Professional Technicians"],
      image: "/washing-machine.jpg"
    },
    {
      name: "Split AC Service",
      duration: "60 mins",
      price: 599,
      features: ["Power Jet AC Cleaning", "Gas leak checkup", "Deep cleaning of filters"],
      image: "/ac-repair.jpg"
    }
  ];
}

