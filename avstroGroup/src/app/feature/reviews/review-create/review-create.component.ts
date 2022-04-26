import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IReview, IUser } from 'src/app/core/interfaces';
import { ReviewService } from 'src/app/core/review.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {

  currentUser!: IUser;

  constructor(
    private userService: UserService,
    private router: Router,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (err) => {
        //TODO: Add error
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
      },
      error: (err) => {
        //TODO: Add error
      }
    })
  }

}
