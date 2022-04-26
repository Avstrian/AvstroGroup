import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage?: string;

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private messageBus: MessageBusService
  ) { }

  ngOnInit(): void {
  }

  shouldShowError(controlName: string, sourceGroup: FormGroup = this.loginFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }

  loginHandler(): void {
    const { email, password } = this.loginFormGroup.value;

    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: user => {
        this.router.navigate(['/home']);

        this.messageBus.notifyForMessage({
          text: 'User has successfully logged in!',
          type: MessageType.Success
        })
      },
      error: (err) => {
        this.errorMessage = err.error.message
      }
    })
    
  }

}
