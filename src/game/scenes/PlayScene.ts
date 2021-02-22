import { Scene } from "phaser";
import { PlayerCharacter } from "@/game/units/Unit";
import { OutlinePipeline } from "@/game/pipelines/OutlinePipeline";
import { resolveTransitionHooks } from "vue";

export default class PlayScene extends Scene {
  warrior: PlayerCharacter | null;
  sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  moveCoords: { x: any; y: any } | undefined;
  constructor() {
    super({ key: "PlayScene" });

    this.warrior = null;
  }

  create() {
    // this.input.mouse.disableContextMenu();

    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor(
      "#000"
    );

    const sprite = this.physics.add.sprite(300, 100, "alchemist");
    this.sprite = sprite;

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNames("alchemist", {
        prefix: "idle_",
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNames("alchemist", {
        prefix: "walk_",
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    });

    // sprite.setPipeline(OutlinePipeline.KEY);
    // sprite.pipeline.set2f(
    //   "uTextureSize",
    //   sprite.texture.getSourceImage().width,
    //   sprite.texture.getSourceImage().height
    // );
    sprite.anims.play("idle");

    sprite.setInteractive();

    this.input.on(
      "gameobjectdown",
      (pointer: any, gameObject: any, event: any) => {
        // Fixate on character & need to border it
        // gameObject.fixate();
        sprite.anims.play("idle");
        event.stopPropagation();
      }
    );

    this.input.on("pointerdown", (pointer: any) => {
      console.log(pointer);
      this.moveCoords = {
        x: pointer.x,
        y: pointer.y
      };
      this.sprite?.setVelocity(4);
      sprite.anims.play("walk");
      console.log(this.physics.moveTo(sprite, pointer.x, pointer.y));
      // while (sprite.x !== pointer.x && sprite.y !== pointer.y) {
      //   sprite.setX(pointer.x);
      //   sprite.setY(pointer.y);
      // }
    });
  }

  update(time: any, delta: any) {
    if (this.sprite) {
      if (
        this.sprite.x <= this.moveCoords?.x + 5 &&
        this.sprite.x >= this.moveCoords?.x - 5 &&
        this.sprite.y <= this.moveCoords?.y + 5 &&
        this.sprite.y >= this.moveCoords?.y - 5
      ) {
        this.sprite.setVelocity(0);
        this.sprite.anims.play("idle");
      }
    }
  }
}
