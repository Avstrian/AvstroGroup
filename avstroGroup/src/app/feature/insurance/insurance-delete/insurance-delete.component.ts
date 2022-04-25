import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InsuranceService } from 'src/app/core/insurance.service';
import { IInsurance, IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-insurance-delete',
  templateUrl: './insurance-delete.component.html',
  styleUrls: ['./insurance-delete.component.css']
})
export class InsuranceDeleteComponent implements OnInit {

  public insurance!: IInsurance;
  private currentUser!: IUser;

  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.insuranceService.getInsuranceById$(this.route.snapshot.params.id).subscribe({
      next: (insurance) => {
        this.insurance = insurance;
      },
      error: (err) => {
        //TODO: add error
      }
    })

    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (err) => {
        //TODO: Add error
      }
    })
  }

  cancelDelete(): void {
    this.router.navigate(['/home']);
  }

  deleteInsurance(insuranceId: string): void {
    this.insuranceService.deleteInsurance$(insuranceId, this.currentUser._id).subscribe({
      next: () => {
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        //TODO add error
      }
    })
  }

}
