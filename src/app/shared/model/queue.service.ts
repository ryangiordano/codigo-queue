import { Injectable, Inject } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { QueueMember } from './queue-member';
import { AngularFireDatabase, FirebaseRef} from 'angularfire2';
import { Http } from '@angular/http';
import { firebaseConfig } from '../../../environments/firebase.config';
@Injectable()
export class QueueService {

    sdkDb: any;

    constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb, private http: Http) {
      this.sdkDb = fb.database().ref();
    }

    findAllQueueMembers(): Observable<QueueMember[]> {
      return this.db.list('queue-members');
    }
    createNewQueueMember(branchId: string, member:any): Observable<any> {
      const memberToSave = Object.assign({},member,{})
      const newQueueMemberKey = this.sdkDb.child('lessons').push().key;
      console.log(`This is the key for ${member.name}: ${newQueueMemberKey}`);
      let dataToSave = {};

      dataToSave["queue-members/"+newQueueMemberKey]= memberToSave;
      dataToSave["membersPerQueue/"+ branchId + '/'+newQueueMemberKey]=true;
      return this.firebaseUpdate(dataToSave);
    }
    firebaseUpdate(dataToSave){
      const subject = new Subject();
      this.sdkDb.update(dataToSave)
      .then(
        val=>{
          subject.next(val);
          subject.complete();
        },
        err =>{
          subject.error(err);
          subject.complete();
        }
      );
      return subject.asObservable();
    }
}
