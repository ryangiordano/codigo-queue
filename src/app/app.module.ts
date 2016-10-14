import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RouterConfig } from './router.config';

import { firebaseConfig } from '../environments/firebase.config';
import { authConfig } from '../environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';

import { QueueService } from './shared/model/queue.service';

import { AppComponent } from './app.component';
import { QueueCustomerComponent } from './queue-customer/queue-customer.component';
import { NavComponent } from './nav/nav.component';
import { QueueFormComponent } from './queue-customer/queue-form/queue-form.component';
import { QueueComponent } from './queue/queue.component';
import { QueueListComponent } from './queue/queue-list/queue-list.component';


@NgModule({
  declarations: [
    AppComponent,
    QueueCustomerComponent,
    NavComponent,
    QueueFormComponent,
    QueueComponent,
    QueueListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(RouterConfig),
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
  ],
  providers: [QueueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
