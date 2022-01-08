
import Phaser from 'phaser'
 
export const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    pixelArt: true,
    backgroundColor: 0x220283,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 1000 },
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,},
  };