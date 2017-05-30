var Nakama = {};
Nakama.configs = {
  BACKGROUND_SPEED  : 5,
  PLAYER_SPEED      : 500,
  BULLET_SPEED      : 1500,
};

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
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
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  var t = prompt('Chon tau 1(Dien 1, 2 hoac 3)');
  if (t == 1){
    Nakama.player = new ShipType1Controller(300, 400, {
      up      : Phaser.Keyboard.UP,
      down    : Phaser.Keyboard.DOWN,
      left    : Phaser.Keyboard.LEFT,
      right   : Phaser.Keyboard.RIGHT,
      fire    : Phaser.Keyboard.CONTROL
   });
 }
 if (t == 2){
   Nakama.player = new ShipType2Controller(300, 400, {
     up      : Phaser.Keyboard.UP,
     down    : Phaser.Keyboard.DOWN,
     left    : Phaser.Keyboard.LEFT,
     right   : Phaser.Keyboard.RIGHT,
     fire    : Phaser.Keyboard.CONTROL
  });
}
if (t == 3){
  Nakama.player = new ShipType3Controller(300, 400, {
    up      : Phaser.Keyboard.UP,
    down    : Phaser.Keyboard.DOWN,
    left    : Phaser.Keyboard.LEFT,
    right   : Phaser.Keyboard.RIGHT,
    fire    : Phaser.Keyboard.CONTROL
 });
}
t = prompt('Chon tau 2(Dien 1, 2 hoac 3)');
if (t == 1){
  Nakama.partner = new ShipType1Controller(600, 400, {
    up      : Phaser.Keyboard.W,
    down    : Phaser.Keyboard.S,
    left    : Phaser.Keyboard.A,
    right   : Phaser.Keyboard.D,
    fire    : Phaser.Keyboard.SPACEBAR
  });
}
if (t == 2){
  Nakama.partner = new ShipType2Controller(600, 400, {
    up      : Phaser.Keyboard.W,
    down    : Phaser.Keyboard.S,
    left    : Phaser.Keyboard.A,
    right   : Phaser.Keyboard.D,
    fire    : Phaser.Keyboard.SPACEBAR
  });
}
if (t == 3){
  Nakama.partner = new ShipType3Controller(600, 400, {
    up      : Phaser.Keyboard.W,
    down    : Phaser.Keyboard.S,
    left    : Phaser.Keyboard.A,
    right   : Phaser.Keyboard.D,
    fire    : Phaser.Keyboard.SPACEBAR
  });
}
  //Nakama.test = Nakama.playerGroup.create(30, 40, 'assets','BulletType2.png');
  //Nakama.test.destroy();
}

// update game state each frame
var update = function(){
  Nakama.background.tilePosition.y += Nakama.configs.BACKGROUND_SPEED;

  Nakama.player.update();
  Nakama.partner.update();
}

// before camera render (mostly for debug)
var render = function(){}
