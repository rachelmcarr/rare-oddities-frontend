import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PiercingConsentService, PiercingConsent } from '../../services/piercing-consent.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-piercing-consent',
  templateUrl: './piercing-consent.component.html'
})
export class PiercingConsentComponent {
  @Input() customerID!: number;

  @Output() consentFilled = new EventEmitter<PiercingConsent>();

  consent: PiercingConsent = {
    intakeID: 0,
    customerID: 0,
    understandsHealingProcess: false,
    agreesToAftercare: false,
    consentsToPiercing: false,
    dateSigned: ''
  };

  ngOnInit() {
    this.consent.customerID = this.customerID;
  }

  finalizeConsent() {
    this.consent.customerID = this.customerID;
    this.consent.dateSigned = new Date().toISOString();
    console.log("PiercingConsent finalized:", this.consent);
    this.consentFilled.emit(this.consent);
  }
}