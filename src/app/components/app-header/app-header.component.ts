import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
  @Input() title = '';
}
