import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MaterialModuleModule } from './material-module/material-module.module';
import 'hammerjs';
import { DetailsModule } from './details/details.module';
import { SamplePipe } from './sample.pipe';
import { SampleDirective } from './sample.directive';

@NgModule({
  declarations: [
    AppComponent,
    SamplePipe,
    SampleDirective
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DetailsModule,
    MaterialModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
