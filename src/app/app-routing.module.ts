import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [
  {path: '', component: OrderComponent },
  {path: 'meal', component: MealComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
