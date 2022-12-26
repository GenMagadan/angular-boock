import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { loginModel } from './login/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;

  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  private set isAuthorized(value: boolean) {
    this._isAuthorized = value;
    this.router.navigate([this.isAuthorized ? 'home' : 'auth/login']);
  }

  constructor(
    private router: Router
  ) { }

  public login(model: loginModel): Observable<boolean> {
    let result: boolean = false;
    if (model.email == 'qwerty@dog' && model.password == 'madcat') {
      result = true;
    }
    this.isAuthorized = result;
    return of(result);
  }

  public logout(): void {
    this.isAuthorized = false;
  }
}
