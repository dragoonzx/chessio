export default class Text extends Phaser.Scene {
  i: number;
  hsv!: Phaser.Types.Display.ColorObject[];
  text2!: Phaser.GameObjects.Text;
  constructor() {
    super({ key: "Text" });
    this.i = 0;
  }

  create() {
    this.hsv = Phaser.Display.Color.HSVColorWheel();

    //  Rainbow Stroke
    this.text2 = this.add.text(0, 0, "CHESSio", {
      font: "28px Arial Black",
      color: "#000"
    });
    this.text2.setStroke("#fff", 12);
    this.text2.setShadow(2, 2, "#555", 2, true, true);
  }

  update() {
    const top1 = this.hsv[this.i].b;
    const top2 = this.hsv[this.i].g;
    const bottom = this.hsv[359 - this.i].b;
    const bottom2 = this.hsv[359 - this.i].g;
    this.text2.setTint(top1, top2, bottom, bottom2);

    this.i++;

    if (this.i === 360) {
      this.i = 0;
    }
  }
}
