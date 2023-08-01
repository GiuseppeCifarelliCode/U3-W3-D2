import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent {

  username!:string
  password!:string

  login(form:NgForm){
    console.log(form.form.value);
  }
}
