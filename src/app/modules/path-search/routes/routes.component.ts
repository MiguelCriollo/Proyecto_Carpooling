import { Component } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
  destinosTest = ['Paccha','Universidad de Cuenca','Sudamericano'];

  headers = ['Destino','Parada1','Parada2','Conductor','Llegada'];
  resultsTest = [
    ['Miami', 'Aeropuerto', 'Hotel', 'Juan', '10:00'],
    ['Nueva York', 'Estación', 'Museo', 'Ana', '09:30'],
    ['Barcelona', 'Puerto', 'Playa', 'Carlos', '11:15'],
    ['Tokio', 'Templo', 'Jardín', 'María', '14:45'],
    ['París', 'Torre', 'Catedral', 'Pedro', '12:20']
  ]
}
