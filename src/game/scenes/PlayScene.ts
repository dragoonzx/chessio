import { Scene } from "phaser";
import { PlayerCharacter } from "@/game/units/Unit";
import { createBoard } from "@/game/board";

export default class PlayScene extends Scene {
  warrior: PlayerCharacter | null;
  sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  moveCoords: { x: any; y: any } | undefined;
  rexBoard: any;
  activeChar: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  constructor() {
    super({ key: "PlayScene" });

    this.warrior = null;
  }

  create() {
    // this.input.mouse.disableContextMenu();
    const postFxPlugin = this.plugins.get("rexOutlinePipeline");

    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor(
      "#000"
    );

    const sprite = this.physics.add.sprite(150, 200, "alchemist");
    sprite.setInteractive({ useHandCursor: true });
    sprite.setDepth(1);
    this.sprite = sprite;

    const enemy = this.physics.add.sprite(150, 20, "alchemist");
    enemy.setInteractive({ useHandCursor: true });
    enemy.setDepth(1);

    const board = createBoard(this);

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

    sprite.anims.play("idle");
    enemy.anims.play("idle");

    this.input.on("pointerdown", (pointer: any) => {
      console.log(pointer);
      this.moveCoords = {
        x: pointer.x,
        y: pointer.y
      };
      this.activeChar?.setVelocity(4);
      this.activeChar?.anims.play("walk");
      this.activeChar &&
        this.physics.moveTo(this.activeChar, pointer.x, pointer.y);
      // while (sprite.x !== pointer.x && sprite.y !== pointer.y) {
      //   sprite.setX(pointer.x);
      //   sprite.setY(pointer.y);
      // }
    });

    [this.sprite, enemy].forEach(v => {
      v.on("pointerover", () => {
        // Add postfx pipeline
        // @ts-expect-error
        postFxPlugin.add(v, {
          thickness: 1,
          outlineColor: 0xff8a50
        });

        // Cascade 2nd outline
        // @ts-expect-error
        postFxPlugin.add(v, {
          thickness: 2,
          outlineColor: 0xc41c00
        });
      }).on("pointerout", () => {
        // Remove all outline post-fx pipelines
        // @ts-expect-error
        postFxPlugin.remove(v);
      });

      v.on("pointerdown", (p: PointerEvent) => {
        this.activeChar?.setVelocity(0);
        this.activeChar?.anims.play("idle");
        this.activeChar = v;
      });
    });
  }

  update(time: any, delta: any) {
    if (this.activeChar) {
      if (
        this.activeChar.x <= this.moveCoords?.x + 5 &&
        this.activeChar.x >= this.moveCoords?.x - 5 &&
        this.activeChar.y <= this.moveCoords?.y + 5 &&
        this.activeChar.y >= this.moveCoords?.y - 5
      ) {
        this.activeChar.setVelocity(0);
        this.activeChar.anims.play("idle");
      }
    }
  }
}
