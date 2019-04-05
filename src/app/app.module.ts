import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnPushComponent } from './on-push/on-push.component';
import { ViewChildModule } from './view-child/view-child.module';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
  ],
  imports: [
    BrowserModule,
    ViewChildModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
