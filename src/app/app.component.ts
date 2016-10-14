import { Component } from '@angular/core';
import { RouterConfig } from './router.config';
import { NavComponent } from './nav/nav.component';
import { initializeApp, database} from 'firebase';
import {firebaseConfig} from '../environments/firebase.config';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/index';
import 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
