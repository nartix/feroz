import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from 'src/app/app.config';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  title: string = this.config.title;
  email: string = this.config.email;
  github: string = this.config.github;
  linkedin: string = this.config.linkedin;
  profilePicture: string = this.config.profilePicture;
  resume: string = this.config.resume;

  constructor(@Inject(APP_CONFIG) public config: AppConfig) {}
}
