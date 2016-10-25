import { Component, OnInit, Input } from '@angular/core';
import { ricetta} from '../ricetta';

@Component({
  selector: 'app-dettagli-ricetta',
  templateUrl: './dettagli-ricetta.component.html',
  styleUrls: ['../app.component.css']
})
export class DettagliRicettaComponent implements OnInit {

@Input() ricettaSelezionata: Ricetta;

  constructor() { }

  ngOnInit() {
  }

}
