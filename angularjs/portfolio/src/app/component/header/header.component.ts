import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  django5: string = this.config.django5;
  angularjs: string = this.config.angularjs;
  reactjs: string = this.config.reactjs;
  django_rest_framework: string = this.config.django_rest_framework;
  expressjs: string = this.config.expressjs;

  DJANGO5_URL: string = this.config.DJANGO5_URL;
  EXPRESSJS_URL: string = this.config.EXPRESSJS_URL;
  DJANGO_URL: string = this.config.DJANGO_URL;
  REACTJS_URL: string = this.config.REACTJS_URL;

  constructor(@Inject(APP_CONFIG) public config: AppConfig) {}
}
