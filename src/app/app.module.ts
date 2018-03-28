import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { BalanceComponent } from './balance/balance.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountService } from './account.service';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    BalanceComponent,
    AccountComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MobxAngularModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
