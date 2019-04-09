import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldsModule } from './form-fields/form-fields.module';
import { GlobalizeModule } from './globalize/globalize.module';
import { OnPushModule } from './on-push/on-push.module';
import { TestFakeAsyncModule } from './test-fake-async/test-fake-async.module';
import { TestMaterialTableModule } from './test-material-table/test-material-table.module';
import { TestOnChangesModule } from './test-on-changes/test-on-changes.module';
import { TestPropertyBasedModule } from './test-property-based/test-property-based.module';
import { TestTriggerEventModule } from './test-trigger-event/test-trigger-event.module';
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
    TestFakeAsyncModule,
    TestTriggerEventModule,
    TestPropertyBasedModule,
    FormFieldsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
