import Phaser from 'phaser'
import Player from './player.js'


export default class MyGame extends Phaser.Scene
{
    
    constructor ()
    {
    super('thisGame');

    }

    preload ()
    {
    this.player
    this.keys
    // this.cameras
    }

    create ()
    {
    // MAP
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("SuperMarioBros-World1-1", "tiles");


    // CAMERA
    


    // PLAYER
    this.player = new Player(this,225,343, 'mc').setScale(1);
    this.player.body.setCollideWorldBounds(true);
    // this.cameras.main.startFollow(this.player, true, 0.1, 0.1)
    

    // TROLLS

    }

    update(time,delta){
        this.player.update()
    }
}