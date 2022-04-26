import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';
import { ReviewService } from 'src/app/core/review.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {

  errorMessage?: string;

  currentUser!: IUser;

  constructor(
    private userService: UserService,
    private router: Router,
    private reviewService: ReviewService,
    private messageBus: MessageBusService
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

  clearReviewText(reviewForm: NgForm): void {
    reviewForm.reset();
  }

  addReview(reviewForm: NgForm): void {
    const rating: number = reviewForm.value.rating;
    const review: string = reviewForm.value.review;
    
    const data = {
      owner: this.currentUser,
      rating,
      text: review,
    }

    this.reviewService.createReview$(data).subscribe({
      next: () => {
        this.router.navigate(['/home']);

        this.messageBus.notifyForMessage({
          text: 'Review created!',
          type: MessageType.Success
        })
      },
      error: (err) => {
        this.errorMessage = err.error.message
      }
    })
  }

}
