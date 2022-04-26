import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/core/insurance.service';

import { IInsurance } from 'src/app/core/interfaces';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';

@Component({
  selector: 'app-insurance-confirm',
  templateUrl: './insurance-confirm.component.html',
  styleUrls: ['./insurance-confirm.component.css']
})
export class InsuranceConfirmComponent implements OnInit {

  @Input() insuranceDetails!: IInsurance;

  errorMessage?: string;

  constructor(
    private router: Router,
    private insuranceService: InsuranceService,
    private messageBus: MessageBusService
  ) { }

  ngOnInit(): void {
  }

  confirmInsuranceCreation(data: IInsurance): void {
    this.insuranceService.createInsurance$(data).subscribe({
      next: () => {
        this.router.navigate(['/user/profile']);

        this.messageBus.notifyForMessage({
          text: 'Insurance was successfully created!',
          type: MessageType.Success
        })
      },
      error: (err) => {
        this.errorMessage = err.error.message
        this.router.navigate(['/insurances/create']);
      }
    })

  }

  cancelInsurance(): void {
    this.router.navigate(['/home'])
  }

}
