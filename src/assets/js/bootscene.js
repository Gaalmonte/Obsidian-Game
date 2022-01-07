import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
    constructor(){
        super('Boot');
    }
    
    preload(){
        // MAIN CHARACTER ASSETS
        this.load.atlas('mc', 
        'src/assets/img/mc/mc.png',
        'src/assets/img/mc/mc_atlas.json');
        this.load.image("tiles", "src/assets/img/map/obsidiantiles.png");
        this.load.tilemapTiledJSON("map", "src/assets/img/map/obsidianmap.json");
        this.load.image('spike','src/assets/img/map/spikes.png')
        
    }
    create(){
        this.scene.start('thisGame');
    }
}