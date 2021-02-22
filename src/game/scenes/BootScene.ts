import { Scene } from "phaser";
import alchemist from "@/game/assets/alchemist.png";
import alchemistJson from "@/game/assets/alchemist.json";

export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.atlas("alchemist", alchemist, alchemistJson);
  }

  create() {
    this.scene.start("PlayScene");
  }
}
