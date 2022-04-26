import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/core/insurance.service';
import { IInsurance, IUser } from 'src/app/core/interfaces';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-insurance-pay',
  templateUrl: './insurance-pay.component.html',
  styleUrls: ['./insurance-pay.component.css']
})
export class InsurancePayComponent implements OnInit {

  errorMessage?: string;

  currentUser!: IUser;
  userInsurances: IInsurance[] = [];
  currentInsurance!: IInsurance;
  showCurrentInsurance: boolean = false;

  constructor(
    private userService: UserService,
    private insuranceService: InsuranceService,
    private router: Router,
    private messageBus: MessageBusService
  ) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      complete: () => {
        for (let insurance of this.currentUser.insurances) {
          if (insurance.timesLeftToPay != 0) {
            this.userInsurances.push(insurance);
          }
        }
      },
      error: (err) => {
        this.router.navigate(['/user/login']);
      }
    })
  }

  selectChangeHandler(event: any) {
    const currentRegNumber: string = event.target.value;

    this.userInsurances.map((insurnace) => {
      if (insurnace.regNumber === currentRegNumber) {
        this.currentInsurance = insurnace;
        this.showCurrentInsurance = true;
      }
    })
  }

  payForInsurance(): void {
    const insuranceId: string = this.currentInsurance !== undefined 
    ? this.currentInsurance._id 
    : '';
    const userId: string = this.currentUser._id;
    const insuranceCost: number = this.currentInsurance !== undefined
    ? this.currentInsurance.cost
    : 0;
    const userMoney: number = this.currentUser.money;

    if (!insuranceId) {
      return;
    }

    if (this.currentInsurance.timesLeftToPay === 0) {
      return;
    }

    if (userMoney - insuranceCost < 0) {
      this.router.navigate(['/add'])
      return;
    }

    this.insuranceService.payForInsurance$(insuranceId, userId).subscribe({
      next: () => {
        this.router.navigate(['/home']);

        this.messageBus.notifyForMessage({
          text: 'You have successfuly paid your insurance tax!',
          type: MessageType.Success
        })
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })

  }

}
