import { Component, OnInit } from '@angular/core';
import { IReview } from 'src/app/core/interfaces';
import { ReviewService } from 'src/app/core/review.service';

@Component({
  selector: 'app-review-container',
  templateUrl: './review-container.component.html',
  styleUrls: ['./review-container.component.css']
})
export class ReviewContainerComponent implements OnInit {

  public reviews: IReview[] = [];

  constructor(
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.reviewService.getAllReviews$().subscribe({
      next: (reviews) => {
        this.reviews = reviews
      },
      error: (err) => {
        //TODO: Add error
      }
    })
  }

}
