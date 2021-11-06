import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'login-app',
  templateUrl:'./login.component.html',
  styles: [
  ]
})
export class loginComponent implements OnInit {

 sampleForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)], []],
    pass:{ 
      password: '',
      repeat: '' 
    } 
  });
 
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
