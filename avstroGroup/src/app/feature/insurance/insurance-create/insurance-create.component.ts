import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/core/insurance.service';
import { IInsurance } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';
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
      'ownerAge': this.ownerAgeControl,
      'drivingFor': new FormControl('', [Validators.required, drivingForValidator(this.ownerAgeControl)])
    }),
    'payment': new FormControl('', [Validators.required])
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private insuranceService: InsuranceService,
    private userService: UserService
  ) { }

  public showConfirmPage: boolean = false;
  
  public insuranceDetails!: IInsurance;

  ngOnInit(): void {
  }

  shouldShowError(controlName: string, sourceGroup: FormGroup = this.createInsuranceFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  goToConfirmInsurance(): void {
    const { vehicleType, volume, power, regNumber, owner, payment } = this.createInsuranceFormGroup.value;

    const cost = this.insuranceService.calculateCost$(volume, power, owner.drivingFor);

    const body: IInsurance = {
      vehicleType,
      volume,
      power,
      regNumber,
      ownerAge: owner.ownerAge,
      ownerExperience: owner.drivingFor,
      cost,
      paymentType: payment,
      timesLeftToPay: this.insuranceService.checkTimesLeftToPay$(payment),
      owner
    }

    this.insuranceDetails = body;

    this.showConfirmPage = true;

  }

  cancelInsurance(): void {
    this.router.navigate(['/home']);
  }

}
