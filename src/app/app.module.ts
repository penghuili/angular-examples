import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalizeModule } from './globalize/globalize.module';
import { OnPushModule } from './on-push/on-push.module';
import { TestMaterialTableModule } from './test-material-table/test-material-table.module';
import { TestOnChangesModule } from './test-on-changes/test-on-changes.module';
import { ViewChildModule } from './view-child/view-child.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ViewChildModule,
    OnPushModule,
    GlobalizeModule,
    TestOnChangesModule,
    TestMaterialTableModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
