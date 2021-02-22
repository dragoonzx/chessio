import { COLOR_DARK, COLOR_LIGHT, COLOR_PRIMARY } from "@/game/constants";

const getHexagonGrid = function(scene: any) {
  const staggeraxis = "x";
  const staggerindex = "odd";
  const grid = scene.rexBoard.add.hexagonGrid({
    x: 0,
    y: 0,
    cellWidth: 18,
    cellHeight: 18,
    staggeraxis: staggeraxis,
    staggerindex: staggerindex
  });
  return grid;
};

export const createBoard = (scene: any) => {
  const gridGraphics = scene.add.graphics({
    lineStyle: {
      width: 1,
      color: COLOR_DARK,
      alpha: 1
    }
  });

  const board = scene.rexBoard.add
    .board({
      grid: getHexagonGrid(scene),
      width: 30,
      height: 48
    })
    .forEachTileXY(function(
      tileXY: { x: any; y: any },
      board: { getGridPoints: (arg0: any, arg1: any, arg2: boolean) => any }
    ) {
      const points = board.getGridPoints(tileXY.x, tileXY.y, true);
      gridGraphics.strokePoints(points, true);
    },
    scene);

  board.setInteractive().on(
    "tiledown",
    (pointer: any, tileXY: { x: any; y: any }) => {
      Phaser.Actions.Call(
        board.tileZToChessArray(0),
        function(gameObject) {
          gameObject.destroy();
        },
        scene
      );

      if (!board.contains(tileXY.x, tileXY.y)) {
        return;
      }

      scene.rexBoard.add
        .shape(board, tileXY.x, tileXY.y, 0, COLOR_PRIMARY)
        .setScale(0.7);
      const resultTileXYArray = board.getTileXYAtDirection(
        tileXY,
        [0, 1, 2, 3, 4, 5],
        {
          end: 20
        }
      );
      let resultTileXY;
      for (let i = 0, cnt = resultTileXYArray.length; i < cnt; i++) {
        resultTileXY = resultTileXYArray[i];
        if (!board.contains(resultTileXY.x, resultTileXY.y)) {
          continue;
        }
        scene.rexBoard.add
          .shape(board, resultTileXY.x, resultTileXY.y, 0, COLOR_LIGHT)
          .setScale(0.7);
      }
    },
    scene
  );
};
