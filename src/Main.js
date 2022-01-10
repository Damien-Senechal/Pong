let gameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 500,
    pixelArt: true,
    backgroundColor: '#111111',
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
