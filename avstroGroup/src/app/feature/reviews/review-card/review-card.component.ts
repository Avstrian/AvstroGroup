import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/core/interfaces';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  @Input() review!: IReview;

  constructor() { }

  ngOnInit(): void {
  }

}
