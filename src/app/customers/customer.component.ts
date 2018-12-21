import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {Customer} from './customer'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
  customer : Customer=new Customer()
  save(signupForm:NgForm){
    console.log(signupForm.form)
    console.log('Form saved :' + JSON.stringify(signupForm.value))
  }
  ngOnInit() {
  }

}
