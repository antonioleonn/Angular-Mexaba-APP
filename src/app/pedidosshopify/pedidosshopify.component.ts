import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-pedidosshopify',
    templateUrl: './pedidosshopify.component.html',
    styleUrls: ['./pedidosshopify.component.css']
})
export class PedidosShopifyComponent implements OnInit {
    pedidos: any[] = [];
    // Variable para almacenar los pedidos

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.obtenerPedidos();
    }

    obtenerPedidos() {
        const apiUrl = 'https://mexicana-de-abarrotes.myshopify.com/admin/api/2023-04/orders.json';
        const apiKey = 'ba19d691bba6a53c770bd145bf3c7c7f';
        const accessToken = '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';

        const headers = {
            'X-Shopify-Access-Token': accessToken
        };

        this.http.get<any>(apiUrl, { headers }).subscribe(
            response => {
                this.pedidos = response.orders;
            },
            error => {
                console.error('Error al obtener los pedidos de Shopify:', error);
            }
        );
    }
}
