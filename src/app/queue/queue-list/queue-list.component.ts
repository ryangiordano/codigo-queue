import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QueueMember } from '../../shared/model/queue-member'
@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.css']
})
export class QueueListComponent implements OnInit {
  @Input()
  queueMembers: QueueMember[];
  constructor() { }

  ngOnInit() {
  }

}
