import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayersService } from '../players.service';
import { Player } from '../models/player.model';

@Component({
  providers: [PlayersService],
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  currentPlayer: any;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.currentPlayer = this.playersService.getCurrentPlayer();
  }



}
