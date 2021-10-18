import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { userService } from '../user.service';
import {tap} from 'rxjs/operators'
import { Observable } from 'rxjs';
import {Auth0JwtComponent,Auth0JwtService} from 'auth0-jwt'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  constructor(private _user:userService) { }

  ngOnInit(): void {
    //this.login({email:"michal6397@gmail.com",password:"12345"}).subscribe();
  }
  login(user:User):Observable<any>{
   return this._user.logIn(user).pipe(tap((token) => {
      localStorage.setItem('token',token);
      console.log(token);
    }))
  }
}
