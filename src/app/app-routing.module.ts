import { CalcComponent } from './components/calc/calc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from './components/banks/banks.component';

const routes: Routes = [
  {
    path: 'calc', component: CalcComponent
  },
  {
    path: 'banks', component: BanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
