import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from './material.module';
import { AppComponent } from './app/app.component';
import { ConfigService } from './app/services/appconfig.service';
import { routes } from './app/app.routes';


import { ShareModule } from './share.module';
import { TokenInterceptor } from './app/interceptors/token.interceptor';
import { ProxyService } from './app/services/proxy.service';

const initAppConfig = (appConfig: ConfigService, proxy: ProxyService) =>
  () => appConfig.setConfig().then(() => proxy.intiProxy());


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ShareModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    RouterModule.forRoot(routes),
    MaterialModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfig,
      deps: [ConfigService, ProxyService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
