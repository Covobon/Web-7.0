class ShipType3Controller extends ShipController{
  constructor(x, y, configs){
    configs.cooldown  = 0.3;
    configs.speed = 500;
    super(x, y, 'Spaceship3-Player.png', configs);
    this.bulletLeft = Nakama.bulletGroup.create(x, y, 'assets', 'BulletType3.png');
    this.bulletRight = Nakama.bulletGroup.create(x, y, 'assets', 'BulletType3.png');
    this.bulletLeft.visible = false;
    this.bulletRight.visible = false;
  }
  update(){
    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -this.configs.speed;
      //this.bulletLeft.body.velocity.y = -this.configs.speed;
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = this.configs.speed;
      //this.bulletLeft.body.velocity.y = this.configs.speed;
    }
    else{
      this.sprite.body.velocity.y = 0;
      //this.bulletLeft.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -this.configs.speed;
      //this.bulletLeft.body.velocity.x = -this.configs.speed;
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = this.configs.speed;
      //this.bulletLeft.body.velocity.x = this.configs.speed;
    }
    else{
      this.sprite.body.velocity.x = 0;
      //this.bulletLeft.body.velocity.x = 0;
    }
    if(Nakama.keyboard.isDown(this.configs.fire)){
      this.bulletLeft.position.x = this.sprite.position.x + 5;
      this.bulletLeft.position.y = this.sprite.position.y - 935;
      this.bulletRight.position.x = this.sprite.position.x - 40;
      this.bulletRight.position.y = this.sprite.position.y - 935;
      this.bulletLeft.visible = true;
      this.bulletRight.visible = true;
    }
    else{
      this.bulletLeft.visible = false;
      this.bulletRight.visible = false;
    }
  }
}
