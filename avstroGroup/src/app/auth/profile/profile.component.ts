import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public astroVip: boolean = true;

  public user!: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

  }

}
