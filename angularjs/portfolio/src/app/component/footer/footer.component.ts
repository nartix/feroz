import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // get current year
  currentYear = new Date().getFullYear();
  constructor(@Inject(APP_CONFIG) public config: AppConfig) {}
}
