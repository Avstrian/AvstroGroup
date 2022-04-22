import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService, CreateUserDto } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(6)])
  
  registerFormGroup: FormGroup = this.formBuilder.group({
    'firstName': new FormControl(null, [Validators.required, Validators.minLength(2)]),
    'lastName':  new FormControl(null, [Validators.required, Validators.minLength(2)]),
    'email':  new FormControl(null, [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repass': new FormControl(null, [passwordMatch(this.passwordControl)])
    })
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  shouldShowError(controlName: string, sourceGroup: FormGroup = this.registerFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }

  handleRegister(): void {
    const {firstName, lastName, email, passwords } = this.registerFormGroup.value;

    const body: CreateUserDto = {
      firstName,
      lastName,
      email,
      password: passwords.password,
      repass: passwords.repass
    }

    this.authService.register$(body).subscribe(() => {
      this.router.navigate(['/home']);
    })
    
  }
}
