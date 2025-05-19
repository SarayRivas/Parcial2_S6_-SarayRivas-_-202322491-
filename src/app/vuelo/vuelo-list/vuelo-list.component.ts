import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo';
import { VueloService } from '../vuelo.service';
import {VueloDetail} from '../vuelo-detail';

@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  standalone: false,
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {
  Vuelo: Array<Vuelo> = [];
  selected: Boolean = false;
  selectedTeatro!: VueloDetail
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
