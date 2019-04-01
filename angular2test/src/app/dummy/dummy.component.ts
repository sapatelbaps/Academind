import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  name: string;
  constructor() {
  }

  ngOnInit() {
    this.name = 'Sandip';
  }

}
