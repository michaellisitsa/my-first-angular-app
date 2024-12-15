import { Component } from '@angular/core';
import { ApplyForm } from '../ApplyForm';
// Required to use ngForm
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-form-template-driven',
  imports: [FormsModule],
  templateUrl: './detail-form-template-driven.component.html',
  styleUrl: './detail-form-template-driven.component.css',
})
export class DetailFormTemplateDrivenComponent {
  model = new ApplyForm('John', 'Smith', 'john.smith@email.com');

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
