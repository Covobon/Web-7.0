class ShipController{

  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    this.configs = configs;

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
    if(Nakama.keyboard.isDown(this.configs.FIRE)){
        new BulletController(this.sprite.position.x, this.sprite.position.y).ban();

    }
  }
}
