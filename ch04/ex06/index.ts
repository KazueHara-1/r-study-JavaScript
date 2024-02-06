// if を利用せず && や || を用いて maxWidth や maxHeight を設定する関数 (resize1)
function resize1(params?: { maxWidth?: number; maxHeight?: number }) {
  const maxWidth = (params && params.maxWidth) || 600;
  const maxHeight = (params && params.maxHeight) || 480;
  console.log({ maxWidth, maxHeight });
}

// if を利用せず ?. や ?? を用いて maxWidth や maxHeight を設定する関数 (resize2)
function resize2(params?: { maxWidth?: number; maxHeight?: number }) {
  const maxWidth = params?.maxWidth ?? 600;
  const maxHeight = params?.maxHeight ?? 480;

  console.log({ maxWidth, maxHeight });
}

console.log(resize1());
console.log(resize2());
resize1({ maxHeight: 500 });
resize2({ maxHeight: 500 });
