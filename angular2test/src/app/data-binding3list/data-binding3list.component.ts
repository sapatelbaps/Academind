import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding3list',
  templateUrl: './data-binding3list.component.html',
  styleUrls: ['./data-binding3list.component.scss']
})
export class DataBinding3listComponent implements OnInit {
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