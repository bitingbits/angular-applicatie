import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GreeterComponent } from './greeter/greeter.component';
import { createCustomElement } from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';
import { GetDataComponent } from './get-data/get-data.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
    {
    path: 'greeter',
    component: GreeterComponent
    },
    {
    path: 'get-data',
    component: GetDataComponent
    }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreeterComponent,

    GetDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ GreeterComponent ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(GreeterComponent, { injector: this.injector });
    customElements.define('app-greeter', myCustomElement);
  }
}
