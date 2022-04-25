import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/core/insurance.service';
import { IInsurance, IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-insurance-pay',
  templateUrl: './insurance-pay.component.html',
  styleUrls: ['./insurance-pay.component.css']
})
export class InsurancePayComponent implements OnInit {

  currentUser!: IUser;
  userInsurances: IInsurance[] = [];

  constructor(
    private userService: UserService,
    private insuranceService: InsuranceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (err) => {
        //TODO: Add error
      }
    })

    setTimeout(() => {
      this.insuranceService.getInsurancesForUser$(this.currentUser._id).subscribe({
        next: (insurances) => {
          console.log(insurances);
        },
        error: (err) => {
          //TODO: Add error
        }
      })
    }, 3000)
  }

  selectChangeHandler(event: any) {

  }

}
