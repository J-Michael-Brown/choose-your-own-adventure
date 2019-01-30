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

  getPlayerById(playerId: string) {
    return this.playerDb.object('players/' + playerId);
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
