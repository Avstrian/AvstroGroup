import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './core/interfaces';
import { CreateUserDto } from './core/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<IUser>(undefined as unknown as IUser);

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(
    private httpClient: HttpClient,
  ) { }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/users/login`, userData, { withCredentials: true });
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/users/register`, userData, { withCredentials: true });
  }

  logout$(): Observable<void> {
    return this.httpClient
    .post<void>(`${environment.apiUrl}/users/logout`, {}, { withCredentials: true })
      .pipe();
  }

  authenticate(): Observable<IUser> {
    return this.httpClient
      .get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(currentProfile => this.handleLogin(currentProfile)), catchError((err => {
        return EMPTY;
      })));
  }

  handleLogin(newUser: IUser): void {
    this._currentUser.next(newUser);
  }

  handleLogout(): void {
    this._currentUser.next(undefined as unknown as IUser);
  }
}
