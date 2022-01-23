/*class Scene extends Phaser.Scene{
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
            //me.rebond(me.droite);
        })
        this.physics.add.collider(this.balle, this.gauche, function () {
            console.log("touche gauche")
            //me.rebond(me.gauche);
        })

        this.physics.add.collider(this.droite, this.haut)
        this.physics.add.collider(this.droite, this.bas)
        this.physics.add.collider(this.gauche, this.haut)
        this.physics.add.collider(this.gauche, this.bas)

        this.balle.setVelocity(this.speedX, this.speedY)
        this.balle.setMaxVelocity(this.maxspeed,this.maxspeed)

        this.initKeyboard()
    }

    /*rebond(raquette){
        let hauteurRaquette = raquette.displayHeight;

        let positionRelativeRaquette = (this.balle.y - raquette.y);

        positionRelativeRaquette = (positionRelativeRaquette / hauteurRaquette)
        positionRelativeRaquette = positionRelativeRaquette*2-1;

        this.balle.setVelocityY(this.balle.body.velocity.y + positionRelativeRaquette * hauteurRaquette);

    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    if(me.gauche.y <= 20){
                        me.gauche.y = 20
                        me.gauche.setVelocityY(0)
                    }
                    else{
                        me.gauche.setVelocityY(-350)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    if(me.gauche.y >= 370){
                        me.gauche.y = 370
                        me.gauche.setVelocityY(0)
                    }
                    else{
                        me.gauche.setVelocityY(350)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    if(me.droite.y <= 20){
                        me.droite.y = 20
                        me.droite.setVelocityY(0)
                    }else{
                        me.droite.setVelocityY(-350)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.M:
                    if(me.droite.y >= 370){
                        me.droite.y = 370
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
        this.droite.y = this.balle.y-50
        this.gauche.y = this.balle.y-50
        //console.log(this.balle.body.velocity)
    }

}*/


class Scene extends Phaser.Scene{


    preload(){
        this.load.image('square','assets/carre.png');
        this.load.image('circle','assets/cercle.png');
        this.load.image('playerl','assets/PLAYERL.png');
        this.load.image('playerr','assets/PLAYERR.png');
        this.load.image('ball','assets/BALL.png');
        this.load.image('ground','assets/GROUND.png');
        this.load.image('haut','assets/HAUT.png');
        this.load.image('bas','assets/BAS.png');
    }

    create(){

        this.ground = this.add.image(0, 0, 'ground').setOrigin(0, 0)
        this.hauteur = 500
        this.largeur = 1000
        this.speedX = 0
        while(this.speedX===0){
            this.speedX = 5000*Phaser.Math.Between(-1,1)
        }
        this.speedY = Phaser.Math.Between(-5000, 5000)
        this.maxspeed = 5000

        this.balle = this.physics.add.sprite(this.largeur/2, this.hauteur/2, 'ball')
        this.balle.setDisplaySize(20, 20)
        this.balle.body.setBounce(1,1);
        this.balle.body.setAllowGravity(false)

        this.haut = this.physics.add.sprite(0, 0, 'haut').setOrigin(0, 0)
        this.haut.setDisplaySize(this.largeur, 20)
        this.haut.body.setAllowGravity(false)
        this.haut.setImmovable(true);
        this.bas = this.physics.add.sprite(0, 480, 'bas').setOrigin(0, 0)
        this.bas.setDisplaySize(this.largeur, 20)
        this.bas.body.setAllowGravity(false)
        this.bas.setImmovable(true);
        this.player1 = this.physics.add.sprite(50, 360, 'playerl').setOrigin(0, 0)
        this.player1.setDisplaySize(20, 100)
        this.player1.body.setAllowGravity(false)
        this.player2 = this.physics.add.sprite(930, 360, 'playerr').setOrigin(0, 0)
        this.player2.setDisplaySize(20, 100)
        this.player2.body.setAllowGravity(false)
        this.player1.setImmovable(true)
        this.player2.setImmovable(true)

        let me = this;
        this.physics.add.collider(this.player1, this.balle,function(){
            console.log('touche player 1')
            me.rebond(me.player1)
        })
        this.physics.add.collider(this.player2, this.balle,function(){
            console.log('touche player 2')
            me.rebond(me.player2)
        })

        this.physics.add.collider(this.balle, this.bas)
        this.physics.add.collider(this.balle, this.haut)

        this.balle.setMaxVelocity(this.maxspeed,this.maxspeed)

        this.physics.add.collider(this.haut, this.player1)
        this.physics.add.collider(this.bas, this.player1)

        this.physics.add.collider(this.haut, this.player2)
        this.physics.add.collider(this.bas, this.player2)

        this.player1Speed = 0
        this.player2Speed = 0

        if(this.balle<0)
        {
            this.scoreplayer2 +=1;
            this.textplayer1.setText('Player 1 = ' + this.scoreplayer1);

        }

        if(this.balle>this.largeur)
        {
            this.scoreplayer1  +=1;
            this.textplayer2.setText('Player 2 = ' + this.scoreplayer2);
        }


        this.joueurGauche = new Joueur('RED','joueurGauche')
        this.joueurDroite = new Joueur('BLUE','joueurDroite')
        console.log(this.joueurGauche)

        this.balleAucentre();
        this.initKeyboard()
    }

    rebond(players){
        let me = this ;
        console.log(this.player1.y);
        console.log(me.balle.y);
        let hauteurPlayers = players.displayHeight;

        let positionRelativePlayers = (this.balle.y - players.y);

        positionRelativePlayers= (positionRelativePlayers / hauteurPlayers)
        positionRelativePlayers = positionRelativePlayers*2-1;

        this.balle.setVelocityY(this.balle.body.velocity.y + positionRelativePlayers * 50);

    }

    balleAucentre(){
        this.balle.x = this.largeur/2
        this.balle.y = this.hauteur/2
        this.speedX = 0

        this.balle.setVelocityX(Math.random()>0.5?-400:400)
        this.balle.setVelocityY(0)
    }

    /**
     *
     * @param {Joueur} joueur
     */
    win(joueur){
        //alert('Joueur '+joueur.name+' gagne')
        joueur.score ++;
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueurDroite.score)
        this.balleAucentre();
    }

    update(){
        if(this.balle.x>this.largeur){
            this.win(this.joueurGauche);
        }
        if(this.balle.x<0){
            this.win(this.joueurDroite);
        }
        this.player1.y += this.player1Speed
        this.player2.y += this.player2Speed
    }

    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    if(me.player1.y<=20){
                        me.player1Speed = 0
                        me.player1.y = 20
                    }
                    else{
                        me.player1Speed = -5
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    if(me.player1.y>=me.hauteur-120){
                        me.player1Speed = 0
                        me.player1.y = me.hauteur-120
                    }
                    else{
                        me.player1Speed = 5
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    if(me.player2.y<=20){
                        me.player2Speed = 0
                        me.player2.y = 20
                    }
                    else{
                        me.player2Speed = -5
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    if(me.player2.y>=me.hauteur-120){
                        me.player2Speed = 0
                        me.player2.y = me.hauteur-120
                    }
                    else{
                        me.player2Speed = 5
                    }
                    break;
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.player1Speed = 0
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.player1Speed = 0
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.player2Speed = 0
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.player2Speed = 0
                    break;
            }
        });
    }
}





