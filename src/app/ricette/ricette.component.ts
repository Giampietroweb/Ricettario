import { Component, OnInit } from '@angular/core';
import { ricetta} from '../ricetta';
@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['../app.component.css']
})
export class RicetteComponent implements OnInit {

ricettaSelezionata = ricetta;
  constructor() { }

  ngOnInit() {
  }

}
