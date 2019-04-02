import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-data-binding',
  templateUrl: './test-data-binding.component.html',
  styleUrls: ['./test-data-binding.component.scss']
})
export class TestDataBindingComponent implements OnInit {

  public contact = {
    firstName: 'Sandip',
    lastName: 'Patel',
    email: 'sapatelbaps@gmail.com',
    phone: '9426757872'
  };

  public showDetail = false;

  onSelect() {
    this.showDetail = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
