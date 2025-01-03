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
  filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .subscribe((housingLocationList: Housinglocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(event: SubmitEvent, text: string) {
    event.preventDefault();
    if (!text) {
      this;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((location) => {
      return location.name.toLowerCase().includes(text.toLowerCase());
    });
  }

  jumbleValues(
    event: MouseEvent,
    housingLocation: Housinglocation,
    housingLocationComponent: HousingLocationComponent
  ) {
    event.preventDefault();
    housingLocation.name = housingLocation.name.split('').reverse().join('');
    housingLocationComponent.markForCheck();
  }
  replaceLocationList(event: MouseEvent) {
    event.preventDefault();
    this.filteredLocationList = this.housingLocationList;
  }
}
