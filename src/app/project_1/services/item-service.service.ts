import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { IDataDb, IItemsDB } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private api  = 'assets/json/data/items.json'

  constructor(private http:HttpClient) { }

  getItems(): Observable<IItemsDB[]> {
    return this.http.get<IDataDb>(this.api).pipe(
      map((data:IDataDb) => data.itemsDB),
      shareReplay()
    );
  }
}
