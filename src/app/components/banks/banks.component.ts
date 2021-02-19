import { MatTable } from '@angular/material/table';
import { DataBank } from './../../interfaces/bank';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BanksService } from 'src/app/services/banks.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  banks: DataBank[] = [];
  allBanks: DataBank[] = [];
  displayedColumns: string[] = ['name', 'interestRate', 'maximumLoan', 'minimumDownPayment', 'loanTerm'];
  displayedAllColumns: string[] = ['#'].concat(this.displayedColumns).concat(['Edit', 'Delete']);
  name: string = '';
  interestRate = 0;
  maximumLoan = 0;
  minimumDownPayment = 0;
  loanTerm = 0;
  constructor(private banksService: BanksService) {
  }


  ngOnInit(): void {
    this.banks = this.getBanks();
    this.allBanks = this.getAllBanks();
  }

  getBanks(): DataBank[] {
    return this.banksService.getBanks();
  }

  getAllBanks(): DataBank[] {
    return this.banksService.getAllBanks();
  }

  delete(i: number): void {
    this.banksService.delete(i);
    this.table.renderRows();
  }

  edit(i: number): void {
    this.banksService.banks[i].editIsActive = !this.banksService.banks[i].editIsActive
  }

  save(i: number): void {
    this.banksService.banks[i].editIsActive = !this.banksService.banks[i].editIsActive
  }

  add(): void {
    if (this.name != '' && this.interestRate > 0 && this.maximumLoan > 0 && this.minimumDownPayment > 0 && this.loanTerm > 0) {
      this.banksService.add(this.name, this.interestRate, this.maximumLoan, this.minimumDownPayment, this.loanTerm);
      this.allBanks = this.getAllBanks();
      this.table.renderRows();
    } else {
      alert('Enter correct this data');
    }
  }
}
