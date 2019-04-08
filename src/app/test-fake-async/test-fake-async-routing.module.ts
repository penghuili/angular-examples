import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FakeAsyncComponent } from './fake-async/fake-async.component';

const routes: Routes = [
  {
    path: 'test-fake-async',
    component: FakeAsyncComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestFakeAsyncRoutingModule { }
