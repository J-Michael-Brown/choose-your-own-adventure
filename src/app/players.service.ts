import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Player } from './models/player.model';

@Injectable()
export class PlayersService {
  playerDb: AngularFireDatabase;
  players: FirebaseListObservable<any[]>;
  currentPlayer: Player;

  constructor(private database: AngularFireDatabase) {
    this.playerDb = database;
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players
  }

  getCurrentPlayer(){
    return this.currentPlayer;
  }

  getPlayerById(playerKey: string) {
    return this.playerDb.object('players/' + playerKey);
  }

  assignCurrentPlayer(player: Player){
    this.currentPlayer = player;
  }

  addScore(points: number) {
    this.currentPlayer.score+=points;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

}
