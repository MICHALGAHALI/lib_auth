import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { userService } from '../user.service';
import {catchError, tap} from 'rxjs/operators'
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  constructor(private _user:userService) { }
  errors_server:Observable<string>=of();
  ngOnInit(): void {
    //this.login({email:"michal6397@gmail.com",password:"12345"}).subscribe();
  }
  login(user:User){
    this.errors_server= this._user.logIn(user).pipe(
      catchError(error =>of(error)),
      tap((token) => {
      localStorage.setItem('token',token);
      console.log(token);
    }))
  }
}
