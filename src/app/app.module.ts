import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalizeModule } from './globalize/globalize.module';
import { OnPushModule } from './on-push/on-push.module';
import { ViewChildModule } from './view-child/view-child.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ViewChildModule,
    OnPushModule,
    GlobalizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
