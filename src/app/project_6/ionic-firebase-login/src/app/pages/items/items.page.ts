// src/app/pages/items/items.page.ts

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  categories: string[] = ['Category A', 'Category B', 'Category C'];
  selectedCategory: string = '';
  minPrice: number = 0;
  maxPrice: number = 100;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getItems().subscribe(data => {
      this.items = data;
      this.filteredItems = this.items;
    });
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item => {
      const isInCategory = !this.selectedCategory || item.category === this.selectedCategory;
      const isInPriceRange = item.price >= this.minPrice && item.price <= this.maxPrice;
      return isInCategory && isInPriceRange;
    });
  }
}
