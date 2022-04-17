import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
})

export class CaseComponent implements OnInit {

  form = new FormGroup({
    caseStatus : new FormControl(1, Validators.required),
    caseTitle : new FormControl('', Validators.required),
    custName : new FormControl('', Validators.required),
    billAcc : new FormControl('', Validators.required),
    idType : new FormControl(''),
    custId : new FormControl('', Validators.required),
    caseId : new FormControl(1, Validators.required),
    serviceId : new FormControl('', Validators.required),
    action : new FormControl('1'),
    name : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    description : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
  });

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  resetForm(){
    this.form.reset();
    this.form.patchValue({
      caseStatus : 1,
      caseId : 1,
      action : '1'
    })
  }

  onSubmit() {
    console.warn(this.form.value);
    window.alert('The form has been submitted. Thank you!');
  }

  status = caseStatusOpts;
  source = caseSourceOpts;

  constructor() {
  }

  ngOnInit(): void {}

}

export interface DropdownValues {
  name: string;
  value: any;
}

export const caseStatusOpts: DropdownValues[] = [
  { 'value': 5, 'name': 'Assigned' },
  { 'value': 6, 'name': 'In Progress' },
  { 'value': 1, 'name': 'New' },
  { 'value': 2, 'name': 'Unassigned' },
  { 'value': 7, 'name': 'Resolved' }
];

export const caseSourceOpts: DropdownValues[] = [
  { 'value': 1, 'name': 'unifi portal' },
  { 'value': 2, 'name': 'myunifi App ' },
  { 'value': 3, 'name': 'SPICE.AI' },
  { 'value': 4, 'name': 'mobile@unifi App' },
  { 'value': 7, 'name': 'HERO' },
  { 'value': 8, 'name': 'SPICE (RETEM)' },
];




