import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";
import Text from "./scenes/Text";

function launch(containerId: string) {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    parent: containerId,
    zoom: 2,
    render: {
      pixelArt: true,
      antialiasGL: false
    },
    physics: {
      default: "arcade"
    },
    scene: [BootScene, PlayScene, Text]
  };

  return new Phaser.Game(config);
}

export { launch };
