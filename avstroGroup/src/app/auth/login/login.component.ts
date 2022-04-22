import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { StorageService } from 'src/app/core/storage.service';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  shouldShowError(controlName: string, sourceGroup: FormGroup = this.loginFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }

  loginHandler(): void {
    const { email, password } = this.loginFormGroup.value;

    this.authService.login$(this.loginFormGroup.value).subscribe(() => {
      this.router.navigate(['/home']);
    });
    
  }

}
