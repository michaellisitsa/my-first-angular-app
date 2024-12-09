import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

export interface IApplyForm {
  firstName: string;
  lastName: string;
  email: string;
}

export type IApplyFormKeys = {
  [field in keyof IApplyForm]: FormControl<IApplyForm[field] | null>;
};

@Component({
  selector: 'app-detail-form',
  imports: [ReactiveFormsModule],
  templateUrl: './detail-form.component.html',
  styleUrl: './detail-form.component.css',
})
export class DetailFormComponent {
  @Output() formSubmission = new EventEmitter<FormGroup<IApplyFormKeys>>();
  applyForm!: FormGroup<IApplyFormKeys>;
  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });
  }

  submitForm() {
    this.formSubmission.emit(this.applyForm);
  }
}
