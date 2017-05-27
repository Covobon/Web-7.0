class BulletController{
  constructor(x, y){
    this.bullet = Nakama.game.add.sprite(x, y, 'bullet');
  }
  ban(){
    Nakama.game.physics.arcade.enable(this.bullet);
    this.bullet.body.velocity.y -= 200;
  }
}
