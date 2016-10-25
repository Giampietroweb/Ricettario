import { Component, OnInit, Input } from '@angular/core';
import { ricetta} from '../../ricetta';


@Component({
  selector: 'app-singola-ricetta',
  templateUrl: './singola-ricetta.component.html',
  styleUrls: ['../../app.component.css']
})
export class SingolaRicettaComponent implements OnInit {

@Input() ricetta: ricetta;
ricettaId: number;

  constructor() { }

  ngOnInit() {
  }

}
