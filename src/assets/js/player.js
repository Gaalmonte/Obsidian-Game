import Phaser from 'phaser'
import Entity from './entity.js'

export default class Player extends Entity{
    constructor(scene,x,y,textureKey)
    {
        super(scene,x,y,textureKey, 'Player')
        const anims = scene.anims
        anims.create({
            key: 'standing',
            frames: anims.generateFrameNames(this.textureKey,{
                start: 0,
                end: 0,
                prefix: "standing",
            }),
            frameRate: 7,
            repeat: -1,
        });
        anims.create({
            key: 'walkleft',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 1,
                end: 4,
                prefix: "walkingleft",
            }),
            frameRate: 7,
            repeat: -1,
        });
        anims.create({
            key: 'walkright',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 1,
                end: 4,
                prefix: "walkingright",
            }),
            frameRate: 7,
            repeat: -1,
        });
        anims.create({
            key: 'up',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 0,
                prefix: "up",
            }),
            frameRate: 7,
            repeat: -1,
        });
        anims.create({
            key: 'down',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 0,
                prefix: "down",
            }),
            frameRate: 7,
            repeat: -1,
        });
        const {LEFT,RIGHT,UP,DOWN,W,A,S,D} = Phaser.Input.Keyboard.KeyCodes
        this.keys = scene.input.keyboard.addKeys({
            left: LEFT,
            right: RIGHT,
            up: UP,
            down: DOWN,
            w: W,
            a: A,
            s: S,
            d: D
        })
    }
    update()
    {
    const {keys} = this
    // const speed = 100
    // this.body.setVelocity(0)

        // GO LEFT OR RIGHT INPUT
    if (keys.left.isDown || keys.a.isDown ) {
        this.body.setVelocityX(-160)
        this.anims.play('walkleft', true)
        } else if (keys.right.isDown || keys.d.isDown) {
            this.body.setVelocityX(160)
            this.anims.play('walkright', true)
        }

        // GO UP OR DOWN INPUT
    if (keys.up.isDown || keys.w.isDown) {
        this.body.setVelocityY(-330)
        this.anims.play('up', true)
        }else if (keys.down.isDown || keys.s.isDown) {
        this.anims.play('down', true)
        }

    //     // ADJUSTS SIDEWAY SPEED
    // this.body.velocity.normalize().scale(speed)

        // ANIMATION ORIENTATION !
        // IF THE CHARACTER IS GOING LEFT OR RIGHT
    // if (keys.left.isDown || keys.a.isDown) {
    //     this.anims.play('walkleft', true)
    //     } else if (keys.right.isDown || keys.d.isDown) {
    //     this.anims.play('walkright', true)
    //     } 
        // IF THE CHARACTER IS GOING UP OR DOWN
    // if (keys.up.isDown || keys.w.isDown) {
    //     this.anims.play('up', true)
    //     } else if (keys.down.isDown || keys.s.isDown) {
    //     this.anims.play('down', true)
    //     } 
        // IF THE CHARACTER IS NOT MOVING, GO BACK TO IDLE 
    // if(this.body.velocity.y === 0 && this.body.velocity.x === 0){
    //     this.anims.play('standing', true)
    // }
   
    }
}