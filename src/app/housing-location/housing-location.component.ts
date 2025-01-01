import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterLink, HighlightDirective],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  markForCheck() {
    this.changeDetectorRef.markForCheck();
  }
}
