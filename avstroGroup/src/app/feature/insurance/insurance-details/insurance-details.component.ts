import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from 'src/app/core/insurance.service';
import { IInsurance, IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {

  insurance!: IInsurance;
  currentUser!: IUser;

  constructor(
    private userService: UserService,
    private insuranceService: InsuranceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.insuranceId;

    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (err) => {
        //TODO: Add error
      }
    })

    this.insuranceService.getInsuranceById$(id).subscribe({
      next: (insurance) => {
        this.insurance = insurance
      },
      error: (err) => {
        //TODO add error
      }
    })
  }

}
