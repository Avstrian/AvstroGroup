import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  errorMessage?: string

  public currentUser!: IUser;

  constructor(
    private router: Router,
    private userService: UserService,
    private messageBus: MessageBusService
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
  
  cancelAddingMoney(): void {
    this.router.navigate(['/home']);
  }

  addMoneyToAccount(data: NgForm): void {
    const money = Number(data.value.money);
    const userId = this.currentUser._id
    this.userService.addMoneyToUser$({ money, userId }).subscribe({
      next: () => {
        this.router.navigate(['/home']);

        this.messageBus.notifyForMessage({
          text: 'Money added to account!',
          type: MessageType.Success
        })
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }

}
