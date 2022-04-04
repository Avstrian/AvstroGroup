import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-container',
  templateUrl: './review-container.component.html',
  styleUrls: ['./review-container.component.css']
})
export class ReviewContainerComponent implements OnInit {

  public reviews: Number[] = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
