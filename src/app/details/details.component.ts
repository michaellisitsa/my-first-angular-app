import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  // housingLocation: Housinglocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  housingService = inject(HousingService);
  route = inject(ActivatedRoute);

  housingLocation$ = this.housingService.getHousingLocationById(
    Number(this.route.snapshot.params['id'])
  );

  constructor() {}

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
