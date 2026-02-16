import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCarouselComponent } from '../components/category-carousel/category-carousel';
import { ServiceCarouselComponent } from '../components/service-carousel/service-carousel';
import { NavbarComponent } from '../components/navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CategoryCarouselComponent, ServiceCarouselComponent, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  categories = [
    { name: "Women's Salon & Spa", icon: "/make-up.png" },
    { name: "Men's Salon & Massage", icon: "/make-up.png" },
    { name: "Ac & Appliance Repair", icon: "/make-up.png" },
    { name: "Cleaning", icon: "/make-up.png" },
    { name: "Electrician, Plumber & Carpenter", icon: "/make-up.png" },
    { name: "Painting & Water Proofing", icon: "/make-up.png" },
    { name: "Pest Control", icon: "/make-up.png" },
    { name: "Home Painting", icon: "/make-up.png" },
    { name: "Bathroom & Kitchen Cleaning", icon: "/make-up.png" },
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
      name: "Washing machine checkup",
      price: 10.99,
      image: "/washing-machine.png"
    },
    {
      name: "AC repair (split/ window)",
      price: 23.99,
      image: "/washing-machine.png"
    },
    {
      name: "Intense bathroom cleaning",
      price: 31.99,
      image: "/washing-machine.png"
    },
    {
      name: "Classic bathroom cleaning",
      price: 11.99,
      image: "/washing-machine.png"
    },
    {
      name: "Tap Repair",
      price: 59.9,
      image: "/washing-machine.png"
    },
    {
      name: "Washing machine checkup",
      price: 10.99,
      image: "/washing-machine.png"
    },
    {
      name: "AC repair (split/ window)",
      price: 23.99,
      image: "/washing-machine.png"
    }
  ];

  allServices = [
    {
      name: "Tap Repairs",
      price: 40.9,
      image: "/washing-machine.png"
    },
    {
      name: "Fan repair (ceiling/ exhaust/ wall)",
      price: 24.00,
      image: "/washing-machine.png"
    },
    {
      name: "Jet spray (installation/ repair)",
      price: 89.9,
      image: "/washing-machine.png"
    },
    {
      name: "Flush tank repair (external PVC)",
      price: 14.99,
      image: "/washing-machine.png"
    },
    {
      name: "Drill & hang (wall decor)",
      price: 24.00,
      image: "/washing-machine.png"
    },
    {
      name: "Tap Repairs",
      price: 40.9,
      image: "/washing-machine.png"
    },
    {
      name: "Fan repair (ceiling/ exhaust/ wall)",
      price: 24.00,
      image: "/washing-machine.png"
    }
  ];
}

