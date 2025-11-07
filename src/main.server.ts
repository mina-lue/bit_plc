import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

export default async function bootstrap(context?: BootstrapContext) {
  try {
    return await bootstrapApplication(App, config, context);
  } catch (err) {
    console.error('SSR bootstrap error:', err);
    throw err;
  }
}
