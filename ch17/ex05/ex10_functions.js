// grid を canvas に描画する
export function renderGrid(grid, ROWS, COLS, RESOLUTION, ctx) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}

// Life Game のルールに従ってセルを更新する
export function updateGrid(grid, ROWS, COLS) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      let surv = 0; // 生存数
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (
            row + x >= 0 &&
            row + x < ROWS &&
            col + y >= 0 &&
            col + y < COLS &&
            !(x === 0 && y === 0)
          ) {
            surv += grid[row + x][col + y] ? 1 : 0;
          }
        }
      }

      // 誕生
      //     死んでいるセルに隣接する生きたセルがちょうど3つあれば、次の世代が誕生する。
      if (!grid[row][col] && surv === 3) {
        nextGrid[row][col] = true;
      }
      // 生存
      //     生きているセルに隣接する生きたセルが2つか3つならば、次の世代でも生存する。
      else if (grid[row][col] && (surv === 2 || surv === 3)) {
        nextGrid[row][col] = true;
      }
      // 過疎・過密
      else {
        nextGrid[row][col] = false;
      }
    }
  }
  return nextGrid;
}
