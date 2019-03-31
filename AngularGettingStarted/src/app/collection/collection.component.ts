import { CollectableService } from './../collectable.service';
import { Component, OnInit } from '@angular/core';
import { Collectable } from '../collectable.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectable[] = [];
  constructor(private collectableService: CollectableService) { }

  onRemoveFromCollection(item: Collectable) {
    this.collectableService.removeFromCollection(item);
  }
  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }

}
