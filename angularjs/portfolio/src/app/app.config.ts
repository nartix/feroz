import { InjectionToken } from '@angular/core';

import { templateGlobals, environment } from 'globals';

export const APP_CONFIG = new InjectionToken('app.config');

export interface AppConfig {
  title: string;
  getPageTitle: () => string;
  django5: string;
  angularjs: string;
  reactjs: string;
  django: string;
  django_rest_framework: string;
  expressjs: string;
  redux: string;
  linkedin: string;
  github: string;
  email: string;
  resume: string;
  profilePicture: string;

  production: boolean;
  DJANGO5_URL: string;
  REACTJS_URL: string;
  DJANGO_URL: string;
  EXPRESSJS_URL: string;
}

export const APP_CONFIG_DATA: AppConfig = {
  ...templateGlobals,
  ...environment,
};
