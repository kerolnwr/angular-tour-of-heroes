import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {


  status = caseStatusOpts;
  source = caseSourceOpts;
  //caseStatus = new FormControl('New', Validators.required);
  //statusDef = 1;
  //caseTitle = new FormControl('Billing-Account Maintenance', Validators.required);
  //custName = new FormControl('Ainon', Validators.required);
  //billAcc = new FormControl('32200042566', Validators.required);
  //idType = new FormControl('');
  //custId = new FormControl('831230-23-4566', Validators.required);
  //sourceId = new FormControl('Stellar CBS', Validators.required);
  
  //serviceId= new FormControl('01165627899', Validators.required);

  //form: FormGroup = new FormGroup({});

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

