import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-avstro-vip',
  templateUrl: './avstro-vip.component.html',
  styleUrls: ['./avstro-vip.component.css']
})
export class AvstroVipComponent implements OnInit {

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
        this.router.navigate(['/login']);
      }
    })
  }

  goToCreateReview(): void {
    if (this.currentUser.createdInsurances >= 5 && !this.currentUser.vip) {
      this.router.navigate(['/review']);
    } else {
      return;
    }
  }

}
