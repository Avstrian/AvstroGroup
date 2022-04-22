import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(
    private authService: AuthService,
  ) { }

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

  createInsurance$(data: any) {
    
  }
}


