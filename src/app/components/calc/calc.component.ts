import { BanksService } from './../../services/banks.service';
import { DataBank } from './../../interfaces/bank';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  initialLoan = 280000;
  downPayment = 20000;
  banks: DataBank[] = [];
  selectedBank: any;
  mounthlyPayment = 0;
  messegeLoanShow = false;
  messegeDownPaymentShow = false;
  constructor(private banksService: BanksService) { }

  ngOnInit(): void {
    this.banks = this.banksService.getBanks();
    this.selectedBank = this.banks[0];
  }

  corectLoan(): void {
    if (this.initialLoan > this.selectedBank.maximumLoan) {
      this.initialLoan = this.selectedBank.maximumLoan;
      this.messegeLoanShow = true;
    }
    this.initialLoan = this.initialLoan < 1 ? 1 : this.initialLoan;
  }
  corectDownPayment(): void {
    if (this.downPayment < this.selectedBank.minimumDownPayment) {
      this.downPayment = this.selectedBank.minimumDownPayment;
      this.messegeDownPaymentShow = true;
    }
  }

  calculate(): void {
    const p = this.initialLoan;
    const i = this.selectedBank.interestRate / 100 / 12;
    const n = this.selectedBank.loanTerm * 12;
    console.log(p, i, n);
    this.mounthlyPayment = p * i * (1 + i) ** n / ((1 + i) ** n - 1);
  }

}
