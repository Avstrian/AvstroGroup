import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceService } from 'src/app/core/insurance.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public insuranceCost?: number;

  constructor(
    private insuranceService: InsuranceService
  ) { }

  ngOnInit(): void {
  }

  calculateInsuranceCost(calculatorForm: NgForm): void {
    const volume = calculatorForm.controls.volume.value
    const power = calculatorForm.controls.power.value
    const experience = calculatorForm.controls.drivingFor.value


    this.insuranceCost = this.insuranceService.calculateCost$(volume, power, experience);
  }

  clearCalculator(calculator: NgForm): void {
    calculator.resetForm();
  }

}
