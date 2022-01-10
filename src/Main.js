let gameConfig = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 768,
    pixelArt: true,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new Scene()
};
let game = new Phaser.Game(gameConfig);
