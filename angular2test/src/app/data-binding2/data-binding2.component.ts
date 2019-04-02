import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding2',
  templateUrl: './data-binding2.component.html',
  styleUrls: ['./data-binding2.component.scss']
})
export class DataBinding2Component implements OnInit {
  public contacts = [
    {firstName: 'Sandip', lastName: 'Patel', email: 'sapatelbaps@gmail.com', phone: '9426757872'},
    {firstName: 'Anita', lastName: 'Patel', email: 'a@gmail.com', phone: '124123123123'},
    {firstName: 'Rashmika', lastName: 'Patel', email: 'r@gmail.com', phone: '123123123'},
    {firstName: 'Ashok', lastName: 'Patel', email: 'a@gmail.com', phone: '123123'},
    {firstName: 'Bijal', lastName: 'Patel', email: 'b@gmail.com', phone: '34534534534'}
  ];

  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  }

  constructor() { }

  ngOnInit() {
  }

}
