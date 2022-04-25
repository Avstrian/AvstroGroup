import { Component, Input, OnInit } from '@angular/core';
import { IInsurance, IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-insurance-overview',
  templateUrl: './insurance-overview.component.html',
  styleUrls: ['./insurance-overview.component.css']
})
export class InsuranceOverviewComponent implements OnInit {

  @Input() insurance!: IInsurance;

  currentUser!: IUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (err) => {
        //TODO: add Error
        
      }
    })
  }

}
