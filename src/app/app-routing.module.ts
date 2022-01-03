import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ShippingComponent } from './shipping/shipping.component';
 
const routes: Routes = [
  { path: 'shipping', component: BlankComponent },
  { path: 'register', component: BlankComponent },
  { path: 'invoice', component: BlankComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
        