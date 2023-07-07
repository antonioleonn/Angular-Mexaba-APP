import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosShopifyComponent } from './pedidosshopify.component';

const routes: Routes = [
    { path: '', component: PedidosShopifyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedidosShopifyRoutingModule { }
