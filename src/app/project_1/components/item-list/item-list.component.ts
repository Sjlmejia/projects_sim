import { Component, inject, signal } from '@angular/core';
import { IItemsDB } from '../../models/Item';
import { ItemService } from '../../services/item-service.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export default class ItemListComponent {
  items = signal<IItemsDB[]>([]);
  selectedItem = signal<IItemsDB | null>(null);

  private itemService = inject(ItemService);

  ngOnInit(){
    this.getItems();
  }

  private getItems(){
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items.set(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  selectItem(item: IItemsDB){
    this.selectedItem.set(item);

  }
}
