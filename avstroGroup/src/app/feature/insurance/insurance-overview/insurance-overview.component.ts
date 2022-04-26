import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (err) => {
        this.router.navigate(['/user/login']);
      }
    })
  }

}
