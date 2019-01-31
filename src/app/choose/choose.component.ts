import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../models/player.model';

@Component({
  providers: [PlayersService],
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  players: FirebaseListObservable<any[]>;
  constructor(private playersService: PlayersService, private router: Router) {
    this.players = this.playersService.getPlayers();
    console.log(this.players);
  }

  goToIntro(clickedPlayer) {
    console.log(clickedPlayer);
    const player = new Player(clickedPlayer.name, clickedPlayer.score);
    this.playersService.assignCurrentPlayer(player);
    this.router.navigate(['intro/']);
  }

}
