import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {path:'ingresar', component: IngresarPresupuestoComponent},
  {path:'gastos', component: GastosComponent},
  {path:'', redirectTo: '/ingresar', pathMatch: 'full'},
  {path: '**', redirectTo:'/ingresar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
