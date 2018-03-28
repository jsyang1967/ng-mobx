import { Injectable } from '@angular/core';
import { observable, computed } from 'mobx-angular'
//import { sum } from 'lodash';


@Injectable()
export class AccountService {
  @observable transactions: number[] = [];
  constructor() { }

  @computed get Balance(): number {
    //console.log(sum(this.transactions));
    //return sum(this.transactions);
    console.count('Call service');
     return this.transactions.reduce((a, b) => a + b, 0);
  }

  @computed get isNegative(): boolean {
    return this.Balance < 0;
  }

  deposit(money: number) {
    this.transactions = [...this.transactions, money];
  }

  withdraw(money: number) {
    this.transactions = [...this.transactions, -money];
  }

  show() {
    //console.count('Call service');
  }

}