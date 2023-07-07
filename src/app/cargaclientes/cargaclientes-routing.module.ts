
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaClientesComponent } from './cargaclientes.component';

const routes: Routes = [
    { path: '', component: CargaClientesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedidosShopifyRoutingModule { }
