import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('slideInAndOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(150px)' }),
        animate(
          '500ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ])
  ]
})
export class ProfileComponent implements OnInit {

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
        this.router.navigate(['/users/login'])
      }
    })
  }

}
