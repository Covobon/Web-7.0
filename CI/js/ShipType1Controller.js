class ShipType1Controller extends ShipController{
  constructor(x, y, configs){
    configs.cooldown  = 0.2;
    configs.speed = 1000;
    super(x, y, 'Spaceship1-Player.png', configs);
  }

  fire(){
    this.createBullet(new Phaser.Point(0, -1));
    this.createBullet(new Phaser.Point(1, -10));
    this.createBullet(new Phaser.Point(-1, -10));
    this.createBullet(new Phaser.Point(1, -2));
    this.createBullet(new Phaser.Point(-1, -2));
  }

  createBullet(direction){
    new BulletController(
      this.sprite.position.x,
      this.sprite.position.y,
      'BulletType1.png',
      {
        direction: direction
      }
    );
  }
}
