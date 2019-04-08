import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestFakeAsyncRoutingModule } from './test-fake-async-routing.module';
import { FakeAsyncComponent } from './fake-async/fake-async.component';

@NgModule({
  declarations: [FakeAsyncComponent],
  imports: [
    CommonModule,
    TestFakeAsyncRoutingModule
  ]
})
export class TestFakeAsyncModule { }
