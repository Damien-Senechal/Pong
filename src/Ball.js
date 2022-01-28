class Ball extends Phaser.Physics.Arcade.Sprite {

    //Constructeur de Ball

    constructor(scene, x, y) {
        //On appelle le constructeur parent avec super
        super(scene, x, y, 'ball');

        //On ajoute le sprite et ça physique a la scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //On initialise ces paramètre de creation
        this.setDisplaySize(20, 20)
        this.body.setBounce(1, 1);
        this.body.setAllowGravity(false)
    }
}