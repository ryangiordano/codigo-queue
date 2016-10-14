import { Component, OnInit } from '@angular/core';
import { QueueService } from '../shared/model/queue.service';
import { QueueMember} from '../shared/model/queue-member';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router} from '@angular/router';
import {QueueListComponent } from './queue-list/queue-list.component';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queueMembers$: Observable<QueueMember[]>;

  queueMembers: QueueMember[];

  constructor(private _queueService: QueueService, private router: Router) { }

  ngOnInit() {
    this.queueMembers$ = this._queueService.findAllQueueMembers();
    this.queueMembers$.subscribe(queueMembers=>this.queueMembers = queueMembers);
  }

}
