import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-ci-cd',
  templateUrl: './ci-cd.component.html',
  styleUrls: ['./ci-cd.component.scss'],
})
export class CiCdComponent {
  constructor(
    private titleService: Title,
    @Inject(APP_CONFIG) public config: AppConfig
  ) {
    this.titleService.setTitle(this.config.getPageTitle() + 'CI/CD');
  }
}
