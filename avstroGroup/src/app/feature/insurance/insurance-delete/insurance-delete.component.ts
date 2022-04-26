import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from 'src/app/core/insurance.service';
import { IInsurance, IUser } from 'src/app/core/interfaces';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-insurance-delete',
  templateUrl: './insurance-delete.component.html',
  styleUrls: ['./insurance-delete.component.css']
})
export class InsuranceDeleteComponent implements OnInit {
  
  errorMessage?: string;

  public insurance!: IInsurance;
  private currentUser!: IUser;

  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private messageBus: MessageBusService
  ) { }

  ngOnInit(): void {
    this.insuranceService.getInsuranceById$(this.route.snapshot.params.id).subscribe({
      next: (insurance) => {
        this.insurance = insurance;
      },
      error: (err) => {
        this.errorMessage = err.error.message      }
    })

    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (err) => {
        this.router.navigate(['/user/login']);
      }
    })
  }

  cancelDelete(): void {
    this.router.navigate(['/users/profile']);
  }

  deleteInsurance(insuranceId: string): void {
    this.insuranceService.deleteInsurance$(insuranceId, this.currentUser._id).subscribe({
      next: () => {
        this.router.navigate(['/user/profile']);

        this.messageBus.notifyForMessage({
          text: 'Insurance deleted successfuly!',
          type: MessageType.Success
        })
      },
      error: (err) => {
        this.errorMessage = err.error.message
      }
    })
  }

}
