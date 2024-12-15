import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import {
  DetailFormComponent,
  IApplyFormKeys,
} from '../detail-form/detail-form.component';
import { CustomCardComponent } from '../custom-card/custom-card.component';
import { DetailFormTemplateDrivenComponent } from '../detail-form-template-driven/detail-form-template-driven.component';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DetailFormComponent,
    CustomCardComponent,
    DetailFormTemplateDrivenComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  // housingLocation: Housinglocation | undefined;

  housingService = inject(HousingService);
  route = inject(ActivatedRoute);

  housingLocation$ = this.housingService.getHousingLocationById(
    Number(this.route.snapshot.params['id'])
  );

  constructor() {}

  submitApplication(applyForm: FormGroup<IApplyFormKeys>) {
    this.housingService.submitApplication(
      applyForm.value.firstName ?? '',
      applyForm.value.lastName ?? '',
      applyForm.value.email ?? ''
    );
  }
}
