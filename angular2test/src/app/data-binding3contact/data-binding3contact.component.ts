import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding3contact',
  templateUrl: './data-binding3contact.component.html',
  styleUrls: ['./data-binding3contact.component.scss'],
})
export class DataBinding3contactComponent implements OnInit {
  @Input()
  public contact;

  constructor() { }

  ngOnInit() {
  }
}

// export class Contact{
//   public firstName: string;
//   public lastName: string;
//   public  email: string;
//   public  phone: string;
// }
