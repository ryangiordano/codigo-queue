import { Component, OnInit } from '@angular/core';
import { QueueService} from '../shared/model/queue.service';


@Component({
  selector: 'app-queue-customer',
  templateUrl: './queue-customer.component.html',
  styleUrls: ['./queue-customer.component.css']
})
export class QueueCustomerComponent implements OnInit {
  branchId: string ="TEST-BRANCH";
  constructor(private _queueService: QueueService) { }

  ngOnInit() {
  }
  save(form){
    this._queueService.createNewQueueMember(this.branchId,form.value)
    .subscribe(
      ()=>{
        alert("Successfully added to the queue");
        form.reset();
      }

    ),
    err=>(`error adding to the queue ${err}`)
  };
}
