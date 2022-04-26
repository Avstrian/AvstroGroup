import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IReview } from './interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private httpClient: HttpClient
  ) { }

  createReview$(data: any): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiUrl}/reviews/create`, data, { withCredentials: true });
  }

  getAllReviews$(): Observable<IReview[]> {
    return this.httpClient.get<IReview[]>(`${environment.apiUrl}/reviews/get`, { withCredentials: true })
  }
}
