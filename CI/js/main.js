var Nakama = {};

Nakama.configs = {
  PLAYER_SPEED: 10,
  BACKGROUND_SPEED: 3
};


window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create : create,
      update : update,
      render : render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');

  Nakama.game.load.image('bullet', 'Assets/Original Sprites/BulletType1.png');

  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);

  Nakama.keyboard = Nakama.game.input.keyboard;



  Nakama.background = Nakama.game.add.sprite(0, -960,'background');

  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  Nakama.player = new ShipType1Controller(300, 400, 'Spaceship1-Player.png', {
    UP    : Phaser.Keyboard.UP,
    DOWN  : Phaser.Keyboard.DOWN,
    LEFT  : Phaser.Keyboard.LEFT,
    RIGHT : Phaser.Keyboard.RIGHT,
    FIRE  : Phaser.Keyboard.CONTROL,
    cooldown: 0.3
  });
  Nakama.partner = new ShipType1Controller(500, 400, 'Spaceship2-Player.png', {
    UP    : Phaser.Keyboard.W,
    DOWN  : Phaser.Keyboard.S,
    LEFT  : Phaser.Keyboard.A,
    RIGHT : Phaser.Keyboard.D,
    FIRE  : Phaser.Keyboard.SPACEBAR,
    cooldown: 0.3
  });
}


var update = function(){

    Nakama.player.update();
    Nakama.partner.update();

    if (Nakama.background.position.y >= 0){
      Nakama.background.position.y = -960;
    }
    Nakama.background.position.y += 2;

}

// before camera render (mostly for debug)
var render = function(
){

}
