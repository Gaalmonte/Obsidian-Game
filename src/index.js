import Phaser from 'phaser'
import {config} from './assets/js/config.js'
import MyGame from "./assets/js/game.js"
import BootScene from './assets/js/bootscene.js'

class Game extends Phaser.Game {
  constructor(){
    super(config);
    this.scene.add('thisGame', MyGame);
    this.scene.add('Boot', BootScene);
    this.scene.start('Boot');
  }
}
window.onload = function(){
  window.game = new Game();
}