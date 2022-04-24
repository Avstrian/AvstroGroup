import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';

export interface CreateUserDto { 
  firstName: string, 
  lastName: string, 
  email: string, 
  password: string,
  repass: string 
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser?: IUser;

  constructor(
    private httpClient: HttpClient
  ) { }

  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
    .pipe(tap(user => this.currentUser = user))
  }

  addMoneyToUser$(body: { money: number, userId: string }): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiUrl}/users/add-money`, body, { withCredentials: true })
  }
}
