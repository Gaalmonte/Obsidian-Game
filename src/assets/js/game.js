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
    this.cameras
    }

    create ()
    {
    // MAP
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("obsidiantiles", "tiles");
    const platforms = map.createLayer('Platforms', tileset, 0, 0);
    const gothrough = map.createLayer('gothrough', tileset, 0, 0);
    platforms.setCollisionByProperty({
        collides: true
    })

    // MAP COLLISION
    this.physics.world.bounds.width = map.widthInPixels
    this.physics.world.bounds.heigh = map.heightInPixels
    this.physics.add.collider(Player , platforms)


    // CAMERA
    // this.physics.world.bounds.width = map.widthInPixels
    // this.physics.world.bounds.height = map.heightInPixels
    // this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    // this.cameras.main.setRoundPixels(true);


    // PLAYER
    this.player = new Player(this,27,216, 'mc').setScale(1);
    // this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.player.body.setCollideWorldBounds(true)
    

    // TROLLS

    }

    update(time,delta){
        this.player.update()
    }
}