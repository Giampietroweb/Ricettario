import { Component, OnInit } from '@angular/core';
import { ricetta} from '../../ricetta';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListaRicetteComponent implements OnInit {

ricettas :ricetta[] = [];
ricetta = new ricetta('Ciambellone','Un ciambellone molto buono','http://www.giallozafferano.it/images/ricette/32/3206/foto_hd/hd650x433_wm.jpg');
  constructor() { }

  ngOnInit() {
  }

}
