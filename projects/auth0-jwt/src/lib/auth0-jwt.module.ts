import { NgModule } from '@angular/core';
import { loginComponent } from './login.component';
import {passwordRepeatComponent  } from './password-repeat/password-repeat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    loginComponent,
    passwordRepeatComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
   
    loginComponent
  ]
})
export class Auth0JwtModule { }
