import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { IInsurance } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  
  createInsurance$(data: IInsurance): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiUrl}/insurances/create`, data, { withCredentials: true });
  }

  getInsuranceById$(id: string): Observable<IInsurance> {
    return this.httpClient.get<IInsurance>(`${environment.apiUrl}/insurances/${id}`)
  }

  deleteInsurance$(insuranceId: string, userId: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/insurances/delete/${insuranceId}`, { body: {
      userId
    } });
  }

  payForInsurance$(insuranceId: string, userId: string): Observable<void> {
    return this.httpClient.put<void>(`${environment.apiUrl}/insurances/${insuranceId}`, {}, {withCredentials: true})
  }

  calculateCost$(volume: number, power: number, experience: number): number {
    let isVip: boolean = false;
    let result;

    if (this.authService.currentUser$ != undefined) {
      const isVip = this.authService.currentUser$
    }
    result = volume / 50 + power + (100 - experience)

    if (isVip) {
      result = result - result * 0.15
    }

    return Number(result.toFixed(0))
  }

  checkTimesLeftToPay$(paymentType: string) {
    if (paymentType === 'quarter') {
      return 4
    } else if (paymentType === 'half') {
      return 2
    } else if (paymentType === 'full') {
      return 1
    }

    return 0
  }
}


