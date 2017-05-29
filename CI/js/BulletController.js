class BulletController{
  constructor(x, y, configs){
    this.bullet = Nakama.bulletGroup.create(x, y, 'bullet');
    //Nakama.game.physics.arcade.enable(this.bullet);

    this.bullet.body.velocity.y -= 1000;
    this.bullet.body.velocity = configs.direction.setMagnitude(1000);
    this.bullet.anchor = new Phaser.Point(-0.5, 1);

  }
  ban(){

  }
}
