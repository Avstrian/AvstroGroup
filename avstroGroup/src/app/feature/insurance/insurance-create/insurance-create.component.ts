import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { drivingForValidator, regNumberMatch } from '../util';

@Component({
  selector: 'app-insurance-create',
  templateUrl: './insurance-create.component.html',
  styleUrls: ['./insurance-create.component.css']
})
export class InsuranceCreateComponent implements OnInit {

  ownerAgeControl: FormControl = new FormControl('', [Validators.required, Validators.min(18)]);

  get ownerGroup(): FormGroup {
    return this.createInsuranceFormGroup.controls['owner'] as FormGroup;
  }

  createInsuranceFormGroup: FormGroup = this.formBuilder.group({
    'vehicleType': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'volume': new FormControl('', [Validators.required, Validators.min(1000)]),
    'power': new FormControl('', [Validators.required, Validators.min(50)]),
    'regNumber': new FormControl('', [Validators.required, regNumberMatch]),
    'owner': new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'ownerAge': this.ownerAgeControl,
      'drivingFor': new FormControl('', [Validators.required, drivingForValidator(this.ownerAgeControl)])
    }),
    'payment': new FormControl('', [Validators.required])
  })


  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  shouldShowError(controlName: string, sourceGroup: FormGroup = this.createInsuranceFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  createInsurance(): void {
    this.router.navigate(['/home']);
  }

  cancelInsurance(): void {
    this.router.navigate(['/home']);
  }

}
