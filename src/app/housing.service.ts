import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import HOUSING_LOCATION_LIST from './constants/HOUSING_LOCATION_LIST';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // protected housingLocationList: Housinglocation[] = HOUSING_LOCATION_LIST;
  url = 'http://localhost:3000/locations';
  constructor(private http: HttpClient) {}

  getAllHousingLocations(): Observable<Housinglocation[]> {
    return this.http.get<Housinglocation[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<Housinglocation | undefined> {
    return this.http.get<Housinglocation>(`${this.url}/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
