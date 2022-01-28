class Scene extends Phaser.Scene{

    preload(){
        this.load.image('square','assets/carre.png');
        this.load.image('circle','assets/cercle.png');
        this.load.image('playerL','assets/PLAYERL.png');
        this.load.image('playerR','assets/PLAYERR.png');
        this.load.image('ball','assets/BALL.png');
        this.load.image('ground','assets/GROUND.png');
        this.load.image('haut','assets/HAUT.png');
        this.load.image('bas','assets/BAS.png');
    }

    create(){
        if(this.start){
            this.Start()
        }
        else{

        }
    }

    Start(){
            this.initVariables()

            this.ground = this.add.image(0, 0, 'ground').setOrigin(0, 0)

            //Creation de la balle avec la classe Ball
            this.ball = new Ball(this, this.largeur / 2, this.hauteur / 2);

            //Creation des murs avec la classe Wall
            this.haut = new Wall(this, 0, 0, 'haut')
            this.bas = new Wall(this, 0, 480, 'bas')

            //Creation des joueurs avec la classe Player
            this.player1 = new Racket(this, 50, 360, 'playerL')
            this.player2 = new Racket(this, 930, 360, 'playerR')

            this.createCollision()

            if (this.ball < 0) {
                this.scoreplayer2 += 1;
                this.textplayer1.setText('Player 1 = ' + this.scoreplayer1);
            }

            if (this.ball > this.largeur) {
                this.scoreplayer1 += 1;
                this.textplayer2.setText('Player 2 = ' + this.scoreplayer2);
            }


            this.joueurGauche = new Joueur('RED', 'joueurGauche')
            this.joueurDroite = new Joueur('BLUE', 'joueurDroite')
            console.log(this.joueurGauche)

            this.balleAucentre();
            this.initKeyboard()
    }

    initVariables(){
        this.hauteur = 500
        this.largeur = 1000
        this.maxspeed = 500
    }

    createCollision(){
        //Creation des reaction apres un rebond
        let me = this;
        this.physics.add.collider(this.player1, this.ball, function () {
            console.log('touche player 1')
            me.rebond(me.player1)
        })
        this.physics.add.collider(this.player2, this.ball, function () {
            console.log('touche player 2')
            me.rebond(me.player2)
        })

        //Ajout des collider

        this.physics.add.collider(this.ball, this.haut)
        this.physics.add.collider(this.ball, this.bas)
        this.ball.setMaxVelocity(this.maxspeed, this.maxspeed)

        this.physics.add.collider(this.haut, this.player1)
        this.physics.add.collider(this.bas, this.player1)

        this.physics.add.collider(this.haut, this.player2)
        this.physics.add.collider(this.bas, this.player2)
    }

    rebond(players){
        let me = this ;
        console.log(this.player1.y);
        console.log(me.ball.y);
        let hauteurPlayers = players.displayHeight;

        let positionRelativePlayers = (this.ball.y - players.y);

        positionRelativePlayers= (positionRelativePlayers / hauteurPlayers)
        positionRelativePlayers = positionRelativePlayers*2-1;

        this.ball.setVelocityY(this.ball.body.velocity.y + positionRelativePlayers * 50);
    }

    balleAucentre(){
        this.ball.x = this.largeur/2
        this.ball.y = this.hauteur/2
        this.speedX = 0

        this.ball.setVelocityX(Math.random()>0.5?-500:500)
        this.ball.setVelocityY(0)
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
        if(this.ball.x>this.largeur){
            this.win(this.joueurGauche);
        }
        if(this.ball.x<0){
            this.win(this.joueurDroite);
        }
        this.player1.y += this.player1.speed
        this.player2.y += this.player2.speed

        if(this.player1.y>=380){
            this.player1.speed = 0
            this.player1.y = 380
        }
        if(this.player2.y>=380){
            this.player2.speed = 0
            this.player2.y = 380
        }
        if(this.player1.y<=20){
            this.player1.speed = 0
            this.player1.y = 20
        }
        if(this.player2.y<=20){
            this.player2.speed = 0
            this.player2.y = 20
        }
    }

    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.player1Speed = -5
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.player1Speed = 5
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.player2Speed = -5
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.player2Speed = 5
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





