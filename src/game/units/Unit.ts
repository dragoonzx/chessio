export class Unit extends Phaser.GameObjects.Sprite {
  maxHP: number;
  hp: number;
  damage: number;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame: string | number | undefined,
    type: string,
    hp: number,
    damage: number
  ) {
    super(scene, x, y, texture, frame);
    this.type = type;
    this.maxHP = this.hp = hp;
    this.damage = damage;
  }

  attack(target: Unit) {
    target.takeDamage(this.damage);
  }
  takeDamage(damage: number) {
    this.hp -= damage;
  }
  fixate() {
    this.blendMode = Phaser.BlendModes.EXCLUSION;
  }
}

export class PlayerCharacter extends Unit {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame: string | number | undefined,
    type: string,
    hp: number,
    damage: number
  ) {
    super(scene, x, y, texture, frame, type, hp, damage);

    this.setScale(2);
  }
}
