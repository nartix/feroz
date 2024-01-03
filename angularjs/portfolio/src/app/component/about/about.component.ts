import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(
    private titleService: Title,
    @Inject(APP_CONFIG) public config: AppConfig
  ) {
    this.titleService.setTitle(this.config.getPageTitle() + ' About');
  }
}
