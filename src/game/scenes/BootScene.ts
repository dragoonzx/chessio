import { Scene } from "phaser";
import alchemist from "@/game/assets/alchemist.png";
import alchemistJson from "@/game/assets/alchemist.json";
import { OutlinePipeline } from "@/game/pipelines/OutlinePipeline";

export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  // public init(data: any): void {
  //   if (this.game.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer) {
  //     this.game.renderer.pipelines.add(
  //       OutlinePipeline.KEY,
  //       new OutlinePipeline(this.game)
  //     );
  //   }
  // }

  preload() {
    this.load.atlas("alchemist", alchemist, alchemistJson);
  }

  create() {
    this.scene.start("PlayScene");
    this.scene.start("Text");
  }
}
