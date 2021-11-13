import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'projects/myapp/src/app/User.model';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'login-app',
  templateUrl:'./login.component.html',
  styles: [
  ]
})
export class loginComponent implements OnInit {
  @Output("clicklogin") loginSubmit: EventEmitter<User> = new EventEmitter<User>();
  @Input("errors_server") errorsInput: Observable<string>=of();

  registerForm = this._formBuilder.group({
    email : ['', [Validators.email,Validators.required, Validators.minLength(5)], []],
    passwordRepeat:{ 
      password: '',
      repeat: '' 
    } 
  });
 
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  login = () => {
    const user:User={email:this.registerForm.controls["email"].value,password:this.registerForm.controls["passwordRepeat"].value.password}
    this.loginSubmit.emit(user);
  }
}
