import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-queue-form',
  templateUrl: './queue-form.component.html',
  styleUrls: ['./queue-form.component.css']
})
export class QueueFormComponent implements OnInit {
  form: FormGroup;
  formOptions =[
    {
      name: "Reason One"
    },
    {
      name: "Reason Two"
    },
    {
      name: "Reason Three"
    },
    {
      name: "Reason Four"
    }
  ]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      reason: ['', Validators.required]
    })
   }

  ngOnInit() {
  }
  isErrorVisible(field:string, error:string){
    return this.form.controls[field].dirty &&
    this.form.controls[field].errors &&
    this.form.controls[field].errors[error];
  }
  reset(){
    this.form.reset();
  }
  get valid(){
    return this.form.valid;
  }
  get value(){
    return this.form.value;
  }

}
