class Scene extends Phaser.Scene{
    preload()
    {
        this.load.image('square', 'assets/carre.png')
        this.load.image('circle', 'assets/cercle.png')
    }

    create() {
        this.hauteur = 500
        this.largeur = 1000
        this.speedX = 0
        while(this.speedX===0){
            this.speedX = 500*Phaser.Math.Between(-1,1)
        }
        this.speedY = Phaser.Math.Between(-500, 500)
        this.maxspeed = 500

        this.balle = this.physics.add.sprite(this.largeur/2, this.hauteur/2, 'circle')
        this.balle.setDisplaySize(20, 20)
        this.balle.body.setBounce(1,1);
        this.balle.body.setAllowGravity(false)

        this.haut = this.physics.add.sprite(0, 0, 'square').setOrigin(0, 0)
        this.haut.setDisplaySize(this.largeur, 20)
        this.haut.body.setAllowGravity(false)
        this.haut.setImmovable(true);
        this.bas = this.physics.add.sprite(0, 480, 'square').setOrigin(0, 0)
        this.bas.setDisplaySize(this.largeur, 20)
        this.bas.body.setAllowGravity(false)
        this.bas.setImmovable(true);

        this.physics.add.collider(this.balle, this.bas)
        this.physics.add.collider(this.balle, this.haut)
        this.balle.setVelocity(this.speedX, this.speedY)
        this.balle.setMaxVelocity(this.maxspeed,this.maxspeed)
    }

    update()
    {
        if(this.balle.x>=this.largeur || this.balle.x<=0){
            this.balle.x = this.largeur/2
            this.balle.y = this.hauteur/2
            this.speedX = 0
            this.balle.setVelocity(500*Phaser.Math.Between(-1,1))
            this.balle.setVelocityY(Phaser.Math.Between(-500, 500))
        }
        console.log(this.balle.body.velocity)
    }

}
