import { Component, OnInit } from '@angular/core';
import { VueloDetail } from '../vuelo-detail/vuelo-detail.component';
import { Vuelo } from '../vuelo';
import { VueloService } from '../vuelo.service';

@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  standalone: false,
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {
  Vuelo: Array<Vuelo> = [];
  selected: Boolean = false;
  selectedVuelo!: VueloDetail
  nombreVuelo: string = '';

  constructor( private vueloService: VueloService) { }

  ngOnInit() {
    this.getVuelos();
  }

  getVuelos() {
    this.vueloService.getVuelos().subscribe((data: Vuelo[]) => {
      this.Vuelo = data;
    });
  } 

  mostrarVuelo(vuelo: Vuelo) {
    this.nombreVuelo = vuelo.airlineName;
  }


    

 

}
