class ShipController{

  constructor(x, y, spriteName, configs){
    //this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
    this.configs = configs;
    this.timeSinceLastFire = 0;
  }

  update(){
    if(Nakama.keyboard.isDown(this.configs.UP)){
      this.sprite.position.y = Math.max(0, this.sprite.position.y - 10);
    }
    if(Nakama.keyboard.isDown(this.configs.DOWN)){
      this.sprite.position.y = Math.min(960 - 78, this.sprite.position.y + 10);
    }
    if(Nakama.keyboard.isDown(this.configs.LEFT)){
      this.sprite.position.x = Math.max(0, this.sprite.position.x - 10);
    }
    if(Nakama.keyboard.isDown(this.configs.RIGHT)){
      this.sprite.position.x = Math.min(640 - 78, this.sprite.position.x + 10);
    }
    //throtting
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
    if(Nakama.keyboard.isDown(this.configs.FIRE) && this.timeSinceLastFire > this.configs.cooldown){
        this.fire();
        this.timeSinceLastFire = 0;
    }
  }


  fire(){
    this.createBullet(new Phaser.Point( 0, -1));
    this.createBullet(new Phaser.Point( 1, -5));
    this.createBullet(new Phaser.Point(-1, -5));
    this.createBullet(new Phaser.Point( 1, -2));
    this.createBullet(new Phaser.Point(-1, -2));
  }

  createBullet(direction){
      new BulletController(
        this.sprite.position.x,
        this.sprite.position.y,{
          direction: direction
        }
      );
    }
}
