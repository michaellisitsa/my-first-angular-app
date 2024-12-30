import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAccordion } from '@taiga-ui/kit';

@Component({
  selector: 'app-taiga-ui-root',
  imports: [TuiAccordion],
  templateUrl: './taiga-ui-root.component.html',
  styleUrls: ['./taiga-ui-root.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaigaUiRootComponent {}
