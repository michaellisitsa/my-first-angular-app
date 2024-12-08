import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  housingLocationId = -1;
  constructor(private route: ActivatedRoute) {
    this.housingLocationId = Number(route.snapshot.params['id']);
  }
}
