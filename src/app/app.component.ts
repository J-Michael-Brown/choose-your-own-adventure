import { Component, OnInit } from '@angular/core';
import { PlayersService } from './players.service';
import { Player } from './models/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  score: number = 0;
  name: string = null;
  tempName: string;
  player: Player;

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
  }

  createPlayer() {
    this.name = this.tempName;
    this.player = new Player(this.tempName);
    this.playersService.addPlayer(this.player);
    this.playersService.assignCurrentPlayer(this.player);
  }

}
