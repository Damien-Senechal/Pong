class Scene extends Phaser.Scene{

    //Fonction qui creer des particules de fumée

    smoke(x,y,ecart,depth){
        for (let i=1; i<=6; i++){
            let L
            let number
            if(i<=3){
                L="B"
                number = 5
            }
            else{
                L="W"
                number =10
            }

            let particles = this.add.particles('smoke'+L+(i%3+1)).setDepth(depth)
            particles.createEmitter({
                speed: 100,
                lifespan: { min: 800, max: 900 },
                maxParticles: number,
                alpha: 1,
                scale:.5,
                depth : depth,
                x: { min: x-ecart, max: x+ecart },
                y: { min: y-ecart, max: y+ecart }
            });
        }
    }

    //Fonction qui permet de creer tous les arbres a la fois (premiere ligne)

    treeLine(xa, ya,depth){
        xa = xa+this.ecart
        let compteur = 0
        for(let x = xa;x<=Math.abs(xa)+890;x+=90){
            for(let y = ya;y<=Math.abs(ya)+10;y+=80){
                if(compteur%2===0)
                {
                    this.add.sprite(x, y, 'tree').setOrigin(0,0).setDepth(depth-2)
                }
                else{
                    this.add.sprite(x, y, 'tree').setOrigin(0,0).setDepth(depth-3)
                }
                compteur++


            }
        }
    }

    //Fonction qui permet de creer tous les arbres a la fois (deuxieme ligne)

    treeLine2(xa, ya,depth){
        xa = xa+this.ecart
        let compteur = 0
        for(let x = xa;x<=Math.abs(xa)+800;x+=90){
            for(let y = ya;y<=Math.abs(ya)+10;y+=80){
                if(compteur%2===0)
                {
                    this.add.sprite(x, y, 'tree').setOrigin(0,0).setDepth(depth-2)
                }
                else{
                    this.add.sprite(x, y, 'tree').setOrigin(0,0).setDepth(depth-3)
                }
                compteur++


            }
        }
    }

    preload()
    {
        //Importation des videos

        this.load.video('yvesVid', 'assets/video/yves.mp4', 'loadeddata', false, false)
        this.load.video('noise', 'assets/video/noise.mp4', 'loadeddata', false, false)

        //Importation des images

        this.load.image('room', 'assets/img/room.png')
        this.load.image('chair', 'assets/img/chair.png')
        this.load.image('table', 'assets/img/table.png')
        this.load.image('opendoor', 'assets/img/opendoor.png')
        this.load.image('lightOff', 'assets/img/lightOff.png')
        this.load.image('hole1', 'assets/img/trappe1.png')
        this.load.image('hole2', 'assets/img/trappe2.png')
        this.load.image('wardrobe', 'assets/img/armoire.png')
        this.load.image('wardrobe2', 'assets/img/armoire2.png')
        this.load.image('tv', 'assets/img/tv.png')
        this.load.image('windowGuy', 'assets/img/guy.png')
        this.load.image('openWindow', 'assets/img/windowOpen.png')
        this.load.image('tree', 'assets/img/tree.png')
        this.load.image('filter', 'assets/img/filter.png')
        this.load.image('tapis', 'assets/img/tapis.png')
        this.load.image('carpetMonster', 'assets/img/carpetMonster.png')
        this.load.image('carpetRoll', 'assets/img/carpetRoll.png')
        this.load.image('fallDoor', 'assets/img/fallDoor.png')
        this.load.image('closeCurtain', 'assets/img/closeWindow.png')
        this.load.image('tvb', 'assets/img/tvb.png')

        //Importation des particules

        this.load.image('smokeW1', 'assets/fx/smoke1white.png')
        this.load.image('smokeW2', 'assets/fx/smoke2white.png')
        this.load.image('smokeW3', 'assets/fx/smoke3white.png')
        this.load.image('smokeB1', 'assets/fx/smoke1black.png')
        this.load.image('smokeB2', 'assets/fx/smoke2black.png')
        this.load.image('smokeB3', 'assets/fx/smoke3black.png')


        //Importation des audios

        for (let i=1;i<=5;i++){
            this.load.audio('bam'+i, 'assets/sound/bam'+i+'.mp3')
        }
        //this.load.audio('bam3', 'assets/sound/bam3.mp3')
        this.load.audio('ambiance', 'assets/sound/ambiance.wav')
        this.load.audio('off', 'assets/sound/switch_off.mp3')
        this.load.audio('on', 'assets/sound/switch_on.mp3')
        this.load.audio('ghost', 'assets/sound/ghost.mp3')
        this.load.audio('snake', 'assets/sound/snake.mp3')
        this.load.audio('openD', 'assets/sound/openD.mp3')
        this.load.audio('closeD', 'assets/sound/closeD.mp3')
        this.load.audio('openH', 'assets/sound/openH.mp3')
        this.load.audio('closeH', 'assets/sound/closeH.mp3')
        this.load.audio('monster', 'assets/sound/monster.wav')
        this.load.audio('guyWindow', 'assets/sound/guyWindow.mp3')
        this.load.audio('openW', 'assets/sound/wopen.mp3')
        this.load.audio('closeW', 'assets/sound/wclose.mp3')
        this.load.audio('song', 'assets/sound/song.mp3')
        this.load.audio('tree', 'assets/sound/tree.mp3')
        this.load.audio('tree2', 'assets/sound/tree2.mp3')
        this.load.audio('tapis1', 'assets/sound/tapis1.wav')
        this.load.audio('tapis2', 'assets/sound/tapis2.wav')
        this.load.audio('curtainO', 'assets/sound/curtainO.mp3')
        this.load.audio('curtainC', 'assets/sound/curtainC.mp3')
        this.load.audio('tvbs', 'assets/sound/tvb.wav')




        for (let i=1;i<=10;i++){
            this.load.image('ghost'+i, 'assets/img/ghost/ghost_idle'+i+'.png')
        }
        for (let i=1;i<=8;i++){
            this.load.image('snake'+i, 'assets/img/snake/snake'+i+'.png')
        }
    }

    create()
    {
        //Creation des assets qui sont de base dans la scene

        this.ecart = 100

        this.add.image(0+this.ecart, 0, 'room').setOrigin(0,0).setDepth(0)
        this.snake1 = this.add.sprite(400+this.ecart, 175, 'snake1').setOrigin(0,0).setDepth(1)
        this.hole1 = this.add.sprite(100+this.ecart, 350, 'hole1').setOrigin(0,0).setDepth(1)
        this.lightArbre = this.add.sprite(0, 0, 'lightOff').setOrigin(0,0).setDepth(-1)

        // Creation des variables de bouton

        let chairSpawn = false
        let tableSpawn = false
        let ghostSpawn = false
        let lightOff = false
        let snakeSpawn = false
        let doorOpen = false
        let holeOpen = false
        let wardrobeOpen = false
        let wardrobeMonster = false
        let tvSpawn = false
        let yves = false
        let windowGuySpawn = false
        let windowOpen = false
        let treeSpawn = false
        let colorSpawn = false
        let tapisSpawn = false
        let carpetMonster = false
        let noiseSpawn = false
        let carpetRoll = false
        let doorFall = false
        let closeCurtain = false
        let tvBroken = false

        //Creation des animations

        this.anims.create({
            key: 'idle',
            frames: [
                { key: 'ghost1' },
                { key: 'ghost2' },
                { key: 'ghost3' },
                { key: 'ghost4' },
                { key: 'ghost5' },
                { key: 'ghost6' },
                { key: 'ghost7' },
                { key: 'ghost8' },
                { key: 'ghost9' },
                { key: 'ghost10', duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'snakeTongue',
            frames: [
                { key: 'snake2' },
                { key: 'snake3' },
                { key: 'snake4' },
                { key: 'snake5' },
                { key: 'snake6' },
                { key: 'snake7' },
                { key: 'snake8', duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });


        //Attribution des sons

        let bam1 = this.sound.add('bam1', {volume: 0.5});
        let bam2 = this.sound.add('bam2', {volume: 0.5});
        let bam4 = this.sound.add('bam4', {volume: 0.5});
        let bam5 = this.sound.add('bam5', {volume: 0.5});
        let bam3 = this.sound.add('bam3', {volume: 0.5});
        let ghost = this.sound.add('ghost', {volume: 0.25});
        let off = this.sound.add('off', {volume: 0.25});
        let on = this.sound.add('on', {volume: 0.25});
        let snakeSound = this.sound.add('snake', {volume: .5});
        let openD = this.sound.add('openD', {volume: .5});
        let closeD = this.sound.add('closeD', {volume: .5});
        let openH = this.sound.add('openH', {volume: .5});
        let closeH = this.sound.add('closeH', {volume: .5});
        let monster = this.sound.add('monster', {volume: .5});
        let guyWindow = this.sound.add('guyWindow', {volume: .5});
        let openW = this.sound.add('openW', {volume: 1.5});
        let closeW = this.sound.add('closeW', {volume: .5});
        let tree = this.sound.add('tree', {volume: .5});
        let tree2 = this.sound.add('tree2', {volume: .5});
        let tapis1 = this.sound.add('tapis1', {volume: 1});
        let tapis2 = this.sound.add('tapis2', {volume: 1});
        let curtainO = this.sound.add('curtainO', {volume: .5});
        let curtainC = this.sound.add('curtainC', {volume: .5});
        let tvbs = this.sound.add('tvbs', {volume: .5});

        let textKeys = [
            'A','Z','E','R','T','Y','U','I','O','P','Q','S','D','F','G','H','J','K','L','M','W','X'
        ];
        let text = this.add.text(10, 10, textKeys, {font : '32px Courier', fill : '#ffffff'})

        if (this.sound.locked)
        {
            let me = this
            this.fond = this.add.sprite(0, 0, 'lightOff').setOrigin(0,0).setDepth(99)
            text.setText('Click to start').setDepth(100);

            this.sound.once('unlocked', function ()
            {
                me.fond.destroy()
                text.x = 10
                text.y = 10
                text.setText(textKeys);
            });
        }

            //Attribution des musiques

            let song = this.sound.add('song', {volume: .5});
            let ambiance = this.sound.add('ambiance', {volume: .75});
            ambiance.loop = true
            song.loop = true
            ambiance.play()

            //Spawn Chaise

            this.input.keyboard.on('keydown-A', function () {
                if (chairSpawn) {
                    this.smoke(360 + this.ecart, 260, 10, 1)
                    this.chair.destroy()
                    bam2.play();
                    chairSpawn = false
                } else if (lightOff === false) {
                    this.chair = this.add.image(340 + this.ecart, 200, 'chair').setOrigin(0, 0).setDepth(2)
                    this.smoke(360 + this.ecart, 260, 10, 2)
                    bam1.play();
                    chairSpawn = true
                }
            }, this);

            //Spawn Table

            this.input.keyboard.on('keydown-Z', function () {
                if (tableSpawn) {
                    this.smoke(550 + this.ecart, 360, 30, 1)
                    this.tablee.destroy()
                    bam3.play();
                    tableSpawn = false
                } else if (lightOff === false) {
                    this.tablee = this.add.image(500 + this.ecart, 320, 'table').setOrigin(0, 0).setDepth(2)
                    this.smoke(550 + this.ecart, 360, 30, 2)
                    bam2.play();
                    tableSpawn = true
                }
            }, this);

            //Spawn Fantome

            this.input.keyboard.on('keydown-E', function () {
                if (ghostSpawn) {
                    this.smoke(200 + this.ecart, 320, 20, 1)
                    this.ghost.destroy()
                    bam3.play();
                    ghostSpawn = false
                } else if (lightOff === false) {
                    this.ghost = this.add.sprite(200 + this.ecart, 300, 'ghost1').play('idle', false).setDepth(2)
                    this.smoke(200 + this.ecart, 320, 20, 2)
                    ghost.play();
                    ghostSpawn = true
                }
            }, this);

            //Spawn Snake

            this.input.keyboard.on('keydown-R', function () {
                if (snakeSpawn) {
                    snakeSound.play();
                    this.snake.destroy()
                    this.snake1 = this.add.sprite(400 + this.ecart, 175, 'snake1').setOrigin(0, 0).setDepth(1)
                    snakeSpawn = false
                } else {
                    snakeSound.play();
                    this.snake = this.add.sprite(400 + this.ecart, 175, 'snake2').setOrigin(0, 0).setDepth(1)
                    this.snake.play('snakeTongue', false)
                    this.snake1.destroy()
                    snakeSpawn = true
                }
            }, this);

            //Open/Close Door

            this.input.keyboard.on('keydown-T', function () {
                if (doorOpen) {
                    closeD.play();
                    this.door.destroy()
                    doorOpen = false
                } else {
                    openD.play();
                    this.door = this.add.sprite(0 + this.ecart, 0, 'opendoor').setOrigin(0, 0).setDepth(0)
                    doorOpen = true
                }
            }, this);

            //Open/Close Trap Hole

            this.input.keyboard.on('keydown-Y', function () {
                if (holeOpen) {
                    closeH.play();
                    this.hole.destroy()
                    this.hole1 = this.add.sprite(100 + this.ecart, 350, 'hole1').setOrigin(0, 0).setDepth(2)
                    holeOpen = false
                } else {
                    openH.play();
                    this.hole1.destroy()
                    this.hole = this.add.sprite(100 + this.ecart, 350, 'hole2').setOrigin(0, 0).setDepth(2)
                    holeOpen = true
                }
            }, this);

            //Spawn Wardrobe

            this.input.keyboard.on('keydown-U', function () {
                if (wardrobeOpen) {
                    bam4.play();
                    this.smoke(302.5 + this.ecart, 225, 30, 1)
                    this.wardrobe.destroy()
                    if (wardrobeMonster) {
                        this.wardrobe1.destroy()
                    }
                    wardrobeOpen = false
                    wardrobeMonster = false
                } else {
                    bam5.play();
                    this.smoke(302.5 + this.ecart, 225, 30, 2)
                    this.wardrobe = this.add.sprite(270 + this.ecart, 170, 'wardrobe').setOrigin(0, 0).setDepth(1)
                    wardrobeOpen = true
                }
            }, this);

            //Open/Close the wardrobe

            this.input.keyboard.on('keydown-I', function () {
                if (wardrobeMonster) {
                    bam1.play();
                    this.wardrobe1.destroy()
                    wardrobeMonster = false
                } else if (wardrobeOpen) {
                    monster.play();
                    this.wardrobe1 = this.add.sprite(255 + this.ecart, 170, 'wardrobe2').setOrigin(0, 0).setDepth(1)
                    wardrobeMonster = true
                }
            }, this);

            //Spawn TV

            this.input.keyboard.on('keydown-O', function () {
                if (tvSpawn) {
                    bam3.play();
                    this.smoke(650 + this.ecart, 310, 30, 1)
                    if (yves) {
                        this.yvesVideo.destroy()
                    }
                    if (noiseSpawn) {
                        this.noiseVid.destroy()
                    }
                    if (tvBroken) {
                        this.tvBro.destroy()
                    }
                    this.tv.destroy()
                    tvSpawn = false
                    yves = false
                    noiseSpawn = false
                    tvBroken = false
                } else {
                    bam4.play();
                    this.smoke(650 + this.ecart, 310, 30, 2)
                    this.tv = this.add.sprite(600 + this.ecart, 260, 'tv').setOrigin(0, 0).setDepth(1)
                    tvSpawn = true
                }
            }, this);

            //Video on TV

            this.input.keyboard.on('keydown-P', function () {
                if (yves) {
                    this.yvesVideo.destroy()
                    yves = false
                } else if (tvSpawn) {
                    if (noiseSpawn) {
                        this.noiseVid.destroy()
                    }
                    noiseSpawn = false
                    if (tvBroken) {
                        this.tvBro.destroy()
                    }
                    tvBroken = false
                    this.yvesVideo = this.add.video(644 + this.ecart, 315, 'yvesVid').setDepth(1)
                    this.yvesVideo.setScale(0.06)
                    this.yvesVideo.play(true)
                    yves = true
                }
            }, this);

            //Light Off/On

            this.input.keyboard.on('keydown-Q', function () {
                if (lightOff) {
                    on.play();
                    this.light.destroy()
                    lightOff = false
                } else {
                    off.play();
                    this.light = this.add.sprite(0, 0, 'lightOff').setOrigin(0, 0).setDepth(100)
                    lightOff = true
                }
            }, this);

            //Spawn Guy Window

            this.input.keyboard.on('keydown-S', function () {
                if (windowGuySpawn) {
                    this.guyWindow.destroy()
                    windowGuySpawn = false
                } else {
                    guyWindow.play()
                    this.guyWindow = this.add.sprite(200 + this.ecart, 174, 'windowGuy').setOrigin(0, 0).setDepth(0)
                    windowGuySpawn = true
                }
            }, this);

            //Open Window

            this.input.keyboard.on('keydown-F', function () {
                if (windowOpen) {
                    closeW.play()
                    this.window.destroy()
                    windowOpen = false
                } else {
                    openW.play()
                    this.window = this.add.sprite(0 + this.ecart, 0, 'openWindow').setOrigin(0, 0).setDepth(2)
                    windowOpen = true
                }
            }, this);

            // Apparition Arbres

            this.input.keyboard.on('keydown-D', function () {
                if (treeSpawn) {
                    tree2.play()
                    this.lightArbre = this.add.sprite(0, 0, 'lightOff').setOrigin(0, 0).setDepth(-1)
                    treeSpawn = false
                } else {
                    tree.play()
                    this.lightArbre.destroy()
                    this.treeLine(-100, -20, -2)
                    this.treeLine2(-60, 40, -1)
                    treeSpawn = true
                }
            }, this);

            // Changement couleur

            this.input.keyboard.on('keydown-G', function () {
                if (colorSpawn) {
                    ambiance.resume()
                    song.stop()
                    this.color.destroy()
                    colorSpawn = false
                } else {
                    ambiance.pause()
                    song.play()
                    this.color = this.add.sprite(0, 0, 'filter').setOrigin(0, 0).setDepth(100)
                    colorSpawn = true
                }
            }, this);

            // Spawn Tapis

            this.input.keyboard.on('keydown-H', function () {
                if (tapisSpawn) {
                    tapis2.play()
                    this.tapis.destroy()
                    if (carpetMonster) {
                        this.carpet.destroy()
                    }
                    if (carpetRoll) {
                        this.carpetR.destroy()
                    }
                    this.smoke(380 + this.ecart, 340, 30, 2)
                    tapisSpawn = false
                    carpetMonster = false
                    carpetRoll = false
                } else {
                    tapis1.play()
                    this.tapis = this.add.sprite(380, 300, 'tapis').setOrigin(0, 0).setDepth(1)
                    this.smoke(380 + this.ecart, 340, 30, 2)
                    tapisSpawn = true
                }
            }, this);

            // Carpet Monster

            this.input.keyboard.on('keydown-J', function () {
                if (carpetMonster) {
                    tapis1.play();
                    this.carpet.destroy()
                    carpetMonster = false
                } else if (tapisSpawn) {
                    if (carpetRoll) {
                        this.carpetR.destroy()
                    }
                    carpetRoll = false
                    monster.play();
                    this.carpet = this.add.sprite(380, 300, 'carpetMonster').setOrigin(0, 0).setDepth(1)
                    carpetMonster = true
                }
            }, this);

            //TV noise

            this.input.keyboard.on('keydown-K', function () {
                if (noiseSpawn) {
                    this.noiseVid.destroy()
                    noiseSpawn = false
                } else if (tvSpawn) {
                    if (yves) {
                        this.yvesVideo.destroy()
                    }
                    yves = false
                    if (tvBroken) {
                        this.tvBro.destroy()
                    }
                    tvBroken = false
                    tvBroken = false
                    this.noiseVid = this.add.video(646 + this.ecart, 315, 'noise').setDepth(1)
                    this.noiseVid.setScale(0.06)
                    this.noiseVid.play().setVolume(.5)
                    noiseSpawn = true
                }
            }, this);

            //Roll Carpet

            this.input.keyboard.on('keydown-L', function () {
                if (carpetRoll) {
                    tapis2.play();
                    this.tapis = this.add.sprite(380, 300, 'tapis').setOrigin(0, 0).setDepth(1)
                    this.carpetR.destroy()
                    carpetRoll = false
                } else if (tapisSpawn) {
                    if (carpetMonster) {
                        this.carpet.destroy()
                    }
                    carpetMonster = false
                    tapis1.play();
                    this.tapis.destroy()
                    this.carpetR = this.add.sprite(380, 300, 'carpetRoll').setOrigin(0, 0).setDepth(1)
                    carpetRoll = true
                }
            }, this);

            //Falling Door

            this.input.keyboard.on('keydown-M', function () {
                if (doorFall) {
                    openD.play();
                    this.doorF.destroy()
                    doorFall = false
                } else {
                    bam5.play();
                    this.doorF = this.add.sprite(0 + this.ecart, 0, 'fallDoor').setOrigin(0, 0).setDepth(0)
                    doorFall = true
                }
            }, this);

            //Open/Close Curtain

            this.input.keyboard.on('keydown-W', function () {
                if (closeCurtain) {
                    curtainO.play();
                    this.closeWin.destroy()
                    closeCurtain = false
                } else {
                    curtainC.play();
                    this.closeWin = this.add.sprite(540 + this.ecart, 165, 'closeCurtain').setOrigin(0, 0).setDepth(0)
                    closeCurtain = true
                }
            }, this);

            //Broken TV

            this.input.keyboard.on('keydown-X', function () {
                if (tvBroken) {
                    this.tvBro.destroy()
                    tvBroken = false
                } else if (tvSpawn) {
                    if (yves) {
                        this.yvesVideo.destroy()
                    }
                    yves = false
                    if (noiseSpawn) {
                        this.noiseVid.destroy()
                    }
                    noiseSpawn = false
                    tvbs.play()
                    this.tvBro = this.add.sprite(600 + this.ecart, 260, 'tvb').setOrigin(0, 0).setDepth(1)
                    tvBroken = true
                }
            }, this);




    }

    update()
    {
    }

    /*
    this.ghost.once('animationcomplete', () => {
                    console.log('animationcomplete')
                    this.ghost.destroy()
                })
     */
}
