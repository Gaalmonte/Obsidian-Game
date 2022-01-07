
import Phaser from 'phaser'
 
export const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 225,
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,},
  };