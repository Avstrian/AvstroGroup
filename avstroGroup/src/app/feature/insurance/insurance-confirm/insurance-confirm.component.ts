import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/core/insurance.service';

import { IInsurance } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-insurance-confirm',
  templateUrl: './insurance-confirm.component.html',
  styleUrls: ['./insurance-confirm.component.css']
})
export class InsuranceConfirmComponent implements OnInit {

  @Input() insuranceDetails!: IInsurance;

  constructor(
    private router: Router,
    private insuranceService: InsuranceService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  confirmInsuranceCreation(data: IInsurance): void {
    this.insuranceService.createInsurance$(data);

    this.router.navigate(['/home']);
  }

  cancelInsurance(): void {
    this.router.navigate(['/home'])
  }

}
