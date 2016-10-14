import { Route } from '@angular/router';
import { QueueCustomerComponent } from './queue-customer/queue-customer.component';
import { QueueComponent } from './queue/queue.component';

export const RouterConfig: Route[] = [
  {
    path: 'queue',
    component: QueueComponent
  },
  {
    path: 'queue-add',
    component: QueueCustomerComponent
  },
  {
    path: '',
    redirectTo: 'queue',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
