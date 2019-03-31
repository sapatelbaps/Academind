import { Collectable } from './collectable.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectableService {
  private collectables: Collectable[] = [
    {description: 'Sample book', type: 'book'},
    {description: 'Sample paper', type: 'paper'},
    {description: 'Sample assignment', type: 'assignment'},
    {description: 'Sample photo', type: 'photo'},
    {description: 'Sample album', type: 'album'}
  ];

  private collection: Collectable[] = [];

  getCollectables() {
    return this.collectables;
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }

  constructor() { }
}
