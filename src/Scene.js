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

        this.gauche = this.physics.add.sprite(20, this.hauteur/2, 'square').setOrigin(0, 0)
        this.gauche.setDisplaySize(20, 100)
        this.gauche.body.setAllowGravity(false)
        this.gauche.setImmovable(true);
        this.droite = this.physics.add.sprite(this.largeur-40, this.hauteur/2, 'square').setOrigin(0, 0)
        this.droite.setDisplaySize(20, 100)
        this.droite.setImmovable(true);
        this.droite.body.setAllowGravity(false)

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

        let me = this;
        this.physics.add.collider(this.balle, this.droite, function () {
            console.log("touche droite")
            me.rebond(me.droite);
        })
        this.physics.add.collider(this.balle, this.gauche)

        this.physics.add.collider(this.droite, this.haut)
        this.physics.add.collider(this.droite, this.bas)
        this.physics.add.collider(this.gauche, this.haut)
        this.physics.add.collider(this.gauche, this.bas)

        this.balle.setVelocity(this.speedX, this.speedY)
        this.balle.setMaxVelocity(this.maxspeed,this.maxspeed)

        this.initKeyboard()
    }

    rebond(raquette){
        console.log(raquette.y)
        
    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    if(me.gauche.y <= 20){
                        me.gauche.setVelocityY(0)
                    }
                    else{
                        me.gauche.setVelocityY(-350)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    if(me.gauche.y >= 370){
                        me.gauche.setVelocityY(0)
                    }
                    else{
                        me.gauche.setVelocityY(350)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    if(me.droite.y <= 20){
                        me.droite.setVelocityY(0)
                    }else{
                        me.droite.setVelocityY(-350)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.M:
                    if(me.droite.y >= 370){
                        me.droite.setVelocityY(0)
                    }else{
                        me.droite.setVelocityY(350)
                    }
                    break;

            }
        })
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.gauche.setVelocityY(0)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.gauche.setVelocityY(0)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.droite.setVelocityY(0)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.droite.setVelocityY(0)
                    break;

            }
        })
    }

    update()
    {
        if(this.balle.x>=this.largeur || this.balle.x<=0){
            this.balle.x = this.largeur/2
            this.balle.y = this.hauteur/2
            this.speedX = 0
            let dir = Phaser.Math.Between(-1,1)
            if(dir === 0){
                this.balle.setVelocity(500)
            }else{
                this.balle.setVelocity(500*dir)
            }
            this.balle.setVelocityY(Phaser.Math.Between(-500, 500))
        }
        console.log(this.balle.body.velocity)
    }

}
