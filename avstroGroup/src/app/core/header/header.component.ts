import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser$: Observable<IUser> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  private isLoggingOut: boolean = false;

  private subscription?: Subscription;

  //TODO: add general error variables

  constructor(
    public authService: AuthService,
    private router: Router,
    //private messageBus: MessageBusService
  ) { }
  
  logoutHandler(): void {
    if (this.isLoggingOut) {
      return;
    }

    this.isLoggingOut = true;

    console.log('logout called')
    this.authService.logout$().subscribe({
      next: args => {
        console.log(args);
      },
      complete: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoggingOut = false;
      }
    });
  }

  ngOnInit(): void {
    //TODO implement error display functionality
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
