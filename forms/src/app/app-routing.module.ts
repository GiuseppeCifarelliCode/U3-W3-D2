import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenFormComponent } from './pages/driven-form/driven-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: "",
    component: DrivenFormComponent,
    pathMatch:'full'
  },
  {
    path: "drivenForm",
    component: DrivenFormComponent,

  },
  {
    path:"reactiveForm",
    component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
