import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_CONFIG, AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  reactjs: string = this.config.reactjs;
  angularjs: string = this.config.angularjs;
  expressjs: string = this.config.expressjs;
  django_rest_framework: string = this.config.django_rest_framework;
  redux: string = this.config.redux;

  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private titleService: Title
  ) {
    this.titleService.setTitle(this.config.getPageTitle() + 'Home');
  }
}
