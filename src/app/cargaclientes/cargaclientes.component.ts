import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-cargaclientes',
    templateUrl: './cargaclientes.component.html',
    styleUrls: ['./cargaclientes.component.css']
})
export class CargaClientesComponent implements OnInit {
    // Aquí puedes definir propiedades y lógica relacionada con el componente de inicio de sesión

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }
}
