class Wall extends Phaser.Physics.Arcade.Sprite {

    //Constructeur de Wall

    constructor (scene, x, y, texture) {
        //On appelle le constructeur parent avec super
        super(scene, x, y, texture);
        this.texture = texture;
        //On ajoute le sprite et ça physique a la scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //On initialise ces paramètre de creation
        this.setDisplaySize(scene.largeur, 20)
        this.body.setAllowGravity(false)
        this.setImmovable(true);
        this.setOrigin(0, 0)
    }

}