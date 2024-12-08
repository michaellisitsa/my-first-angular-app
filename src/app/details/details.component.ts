import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  housingLocation: Housinglocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    const housingLocationId = Number(route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
