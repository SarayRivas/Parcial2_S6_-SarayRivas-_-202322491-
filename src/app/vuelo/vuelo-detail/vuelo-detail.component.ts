import { Component, OnInit, Input } from '@angular/core';
import { VueloDetail } from

@Component({
  standalone: false,
  selector: 'app-vuelo-detail',
  templateUrl: './vuelo-detail.component.html',
  styleUrls: ['./vuelo-detail.component.css'],
})
export class VueloDetailComponent implements OnInit {
  @Input() vueloDetail!: VueloDetail;

  constructor() {}

  ngOnInit(): void {}