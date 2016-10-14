export class QueueMember{
  constructor(public $key: string, public name: string, public bankId: string, public concluded: boolean, public reason: string){}
  get notSeenYet(){
    return !this.concluded
  }
  //static method to turn json stuff into object and then into array
  static fromJsonList(array):QueueMember[]{
    return array.map(QueueMember.fromJson);
  }
  static fromJson({ $key, name,bankId, concluded, reason}): QueueMember{
    return new QueueMember($key, name,bankId, concluded, reason);
  }
}
