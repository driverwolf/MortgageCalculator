import { DataBank } from './../interfaces/bank';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  passBanks: DataBank[] = [];
  banks: DataBank[] = [
    {
      name: 'My bank',
      interestRate: 2,
      maximumLoan: 500000,
      minimumDownPayment: 10000,
      loanTerm: 1,
      editIsActive: false
    },
    {
      name: 'My bank2',
      interestRate: 3,
      maximumLoan: 1000000,
      minimumDownPayment: 20000,
      loanTerm: 2,
      editIsActive: false
    },
    {
      name: 'My bank3',
      interestRate: 3,
      maximumLoan: 700000,
      minimumDownPayment: 15000,
      loanTerm: 3,
      editIsActive: false
    }
  ];

  constructor() { }

  getAllBanks(): DataBank[] {
    return this.passBanks.concat(this.banks);
  }

  getBanks(): DataBank[] {
    return this.banks;
  }

  delete(i: number): void {
    this.passBanks.push(this.banks[i]);
    this.banks.splice(i, 1);
  }

  add(name: string, interestRate: number, maximumLoan: number, minimumDownPayment: number, loanTerm: number) {
    this.banks.push({
      name: name, interestRate: interestRate, maximumLoan: maximumLoan, minimumDownPayment: minimumDownPayment, loanTerm: loanTerm, editIsActive: false
    })
  }
}
