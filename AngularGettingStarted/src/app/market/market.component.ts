import { CollectableService } from './../collectable.service';
import { Collectable } from '../collectable.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  collectables: Collectable[] = [];

  constructor(private collectableService: CollectableService) {

   }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

  onAddToCollection(item: Collectable) {
    this.collectableService.addToCollection(item);
  }
}
