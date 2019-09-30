import { Component, OnInit } from '@angular/core';
import { User } from './contact.modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: User[] = [];

  userName: string;
  email: string;
  phone: string;

  newUser:User;

  isCollapsed:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  createContact(){
    this.newUser = new User(this.userName, this.email, this.phone);
    this.contacts.push(this.newUser);
  }

  collapse(){
    this.isCollapsed = !this.isCollapsed;
  }

}
