class ShipController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
  }

  update(){
    if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
      this.sprite.position.y = Math.max(0, this.sprite.position.y - 10);
    }
    if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
      this.sprite.position.y = Math.min(960 - 78, this.sprite.position.y + 10);
    }
    if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
      this.sprite.position.x = Math.max(0, this.sprite.position.x - 10);
    }
    if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      this.sprite.position.x = Math.min(640 - 78, this.sprite.position.x + 10);
    }
  }
}
