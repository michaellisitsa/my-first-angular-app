import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
