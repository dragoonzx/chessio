import Phaser from "phaser";

/**
 * Plugins
 */
import OutlinePipelinePlugin from "phaser3-rex-plugins/plugins/outlinepipeline-plugin.js";
import BoardPlugin from "phaser3-rex-plugins/plugins/board-plugin.js";

/**
 * Scenes
 */
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";

function launch(containerId: string) {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 320,
    height: 320,
    parent: containerId,
    zoom: 2,
    render: {
      pixelArt: true,
      antialiasGL: false
    },
    physics: {
      default: "arcade"
    },
    plugins: {
      global: [
        {
          key: "rexOutlinePipeline",
          plugin: OutlinePipelinePlugin,
          start: true
        }
        // ...
      ],
      scene: [
        {
          key: "rexBoard",
          plugin: BoardPlugin,
          mapping: "rexBoard"
        }
      ]
    },
    scene: [BootScene, PlayScene]
  };

  return new Phaser.Game(config);
}

export { launch };
